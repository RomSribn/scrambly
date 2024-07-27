import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { Card, Button, BonusChip } from 'components/index';
import { useTypedSelector } from 'store/store';
import { selectWithdrawState, getWithdrawSuccess, GetWithdrawSuccessRequest } from 'store/slices';
import { Card as CardProps } from 'utils/interfaces';

const getTitle = (card?: CardProps) => {
  if (!card) return 'Withdraw';

  const { price, bonus = 0 } = card;
  return `Withdraw ($${(price + price * (bonus / 100)).toFixed(2)})`;
};

const Home = () => {
  const dispatch = useDispatch<any>();
  const { cardList } = useTypedSelector((state) => state.cards);
  const { selectedCardId, loading } = useTypedSelector(selectWithdrawState);
  const selectedCard = useMemo(() => cardList.find(({ id }) => id === selectedCardId), [selectedCardId, cardList]);
  const title = useMemo(() => getTitle(selectedCard), [selectedCard]);

  const handleWithdraw = useCallback(() => {
    if (!selectedCard) return;
    const { price, type } = selectedCard;
    dispatch(getWithdrawSuccess({ price, type }));
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
      <Button
        title={loading ? 'Withdrawing…' : title}
        onClick={handleWithdraw}
        loading={loading}
        disabled={!selectedCard}
      />

      {selectedCard?.bonus && <BonusChip price={selectedCard.price} bonus={selectedCard.bonus} />}
    </div>
  );
};

export default Home;
