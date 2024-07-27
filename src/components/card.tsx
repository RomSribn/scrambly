import React, { useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';

import { setSelectedCardId } from 'store/slices/withdraw.slice';
import { VisaIcon, AmazonIcon, CheckCircleIcon } from 'assets/icons';
import { CardType, Card } from 'utils/interfaces';

interface CardComponentProps extends Card {
  selected?: boolean;
}

const CardComponent = ({ id, selected, type, price, bonus }: CardComponentProps) => {
  const dispatch = useDispatch();
  const Icon = useMemo(
    () =>
      ({
        [CardType.Visa]: VisaIcon,
        [CardType.Amazon]: AmazonIcon
      }[type]),
    [type]
  );

  const handleSelectCard = useCallback(
    (id: number) => {
      dispatch(setSelectedCardId(id));
    },
    [dispatch]
  );
  return (
    <div
      onClick={() => handleSelectCard(id)}
      className={cx(
        'bg-custom-gray rounded-3xl p-4 text-white relative cursor-pointer hover:shadow-lg transition-shadow duration-300 h-[96px] md:h-[120px] md:min-w-[220px] flex justify-center items-center',
        { 'border-2 border-[#FAAD31]': selected },
        { 'bg-blue-gradient': type === CardType.Visa },
        { 'bg-custom-gray': type === CardType.Amazon }
      )}>
      <h2 className="text-xl font-bold mb-2">
        <Icon />
      </h2>
      <span className={cx('absolute top-2 left-2 rounded-full px-2 py-1', { hidden: !selected })}>
        <CheckCircleIcon />
      </span>
      <span className="absolute top-2 right-2 text-sm bg-gray-200 text-white rounded-full px-2 py-1 bg-opacity-25 font-semibold">
        ${price.toFixed(2)}
      </span>
      <span
        className={cx(
          'absolute bottom-2 right-2 text-sm bg-gray-200 text-white rounded-full px-2 py-1 mt-2 bg-opacity-25 font-semibold',
          { hidden: !bonus }
        )}>
        +{bonus}%
      </span>
    </div>
  );
};

export default CardComponent;
