import React from 'react';

import { GiftIcon } from 'assets/icons/index';

interface BonusChipProps {
  price: number;
  bonus: number;
}

const BonusChip = ({ price, bonus }: BonusChipProps) => {
  const bonusAmount = price * (bonus / 100);
  return (
    <div className="uppercase mt-2 font-semibold bg-orange-500 bg-opacity-15 rounded-full flex items-center justify-center w-max mx-auto p-1 px-4">
      <GiftIcon />
      <span>YOU GET ${bonusAmount.toFixed(2)} BONUS</span>
    </div>
  );
};

export default BonusChip;
