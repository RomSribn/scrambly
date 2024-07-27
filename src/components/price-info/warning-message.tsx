import cx from 'classnames';

import { WarningIcon } from 'assets/icons/index';

interface WarningMessageProps {
  message: string | null;
  className?: string;
}

const WarningMessage = ({ message, className }: WarningMessageProps) => (
  <div className={cx('flex text-sm text-[#CA5E64] items-center gap-1', className, { hidden: !message })}>
    <WarningIcon />
    <span>{message}</span>
  </div>
);

export { WarningMessage };
