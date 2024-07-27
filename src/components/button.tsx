import React from 'react';
import cx from 'classnames';

import { SpinnerIcon } from 'assets/icons/index';

interface ButtonProps {
  onClick: () => void;
  title: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({ onClick, title, disabled, loading }: ButtonProps) => (
  <button
    onClick={onClick}
    className={cx(
      'w-full h-[70px] flex justify-center items-center bg-orange-500 text-white font-bold py-2 px-4 rounded-full mt-4 hover:bg-orange-600 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed',
      { 'pointer-events-none': loading }
    )}
    disabled={disabled}>
    <div className={cx({ hidden: !loading })}>
      <SpinnerIcon />
    </div>
    <span>{title}</span>
  </button>
);

export default Button;
