import React from 'react';

import { GiftIcon } from 'assets/icons/index';

interface BonusChipProps {
  bonus: number;
}

const BonusChip = ({ bonus }: BonusChipProps) => (
  <div className="uppercase mt-2 font-semibold bg-orange-500 bg-opacity-15 rounded-full flex items-center justify-center w-max mx-auto p-1 px-4">
    <GiftIcon />
    <span>YOU GET ${(bonus / 100).toFixed(2)} BONUS</span>
  </div>
);

export default BonusChip;
