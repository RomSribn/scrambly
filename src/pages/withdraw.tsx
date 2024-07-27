import { useEffect, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { Card, Button, BonusChip, PriceInfo } from 'components/index';
import { useTypedSelector } from 'store/store';
import {
  selectWithdrawState,
  selectCardsState,
  selectUserState,
  selectUiState,
  getWithdrawSuccess,
  setWithdrawalsCount,
  setErrorMessage
} from 'store/slices';
import { Card as CardProps } from 'utils/interfaces';

const getTitle = (card?: CardProps) => {
  if (!card) return 'Withdraw';

  const { price, bonus = 0 } = card;
  return `Withdraw ($${(price + price * (bonus / 100)).toFixed(2)})`;
};

const Withdraw = () => {
  const dispatch = useDispatch<any>();
  const { cardList } = useTypedSelector(selectCardsState);
  const { selectedCardId, loading } = useTypedSelector(selectWithdrawState);
  const { balance } = useTypedSelector(selectUserState);
  const { errorMessage } = useTypedSelector(selectUiState);
  const selectedCard = useMemo(() => cardList.find(({ id }) => id === selectedCardId), [selectedCardId, cardList]);
  const title = useMemo(() => getTitle(selectedCard), [selectedCard]);

  const handleWithdraw = useCallback(() => {
    if (!selectedCard) return;
    const { id, price, type } = selectedCard;
    dispatch(getWithdrawSuccess({ price, type }));
    dispatch(setWithdrawalsCount(id));
  }, [selectedCard]);

  useEffect(() => {
    if (!selectedCard) return;
    const { price, bonus } = selectedCard;
    const withdrawalAmount = bonus ? price + price * (bonus / 100) : price;

    if (balance < withdrawalAmount) {
      dispatch(setErrorMessage('Not enough funds'));
      return;
    }
    dispatch(setErrorMessage(null));
  }, [selectedCard]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {cardList.map(({ id, type, price, bonus, commission }) => (
          <Card
            key={id}
            id={id}
            type={type}
            price={price}
            bonus={bonus}
            commission={commission}
            selected={id === selectedCardId}
          />
        ))}
      </div>
      {selectedCard && <PriceInfo price={selectedCard.price} commission={selectedCard.commission} />}
      <Button
        title={loading ? 'Withdrawing…' : title}
        onClick={handleWithdraw}
        loading={loading}
        disabled={!!errorMessage || !selectedCard}
      />

      {selectedCard?.bonus && <BonusChip price={selectedCard.price} bonus={selectedCard.bonus} />}
    </div>
  );
};

export default Withdraw;
