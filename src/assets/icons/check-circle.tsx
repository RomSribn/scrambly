import React from 'react';

interface CheckCircleIconProps {
  /**
   * The fill of the icon.
   */
  color?: string;
}

const CheckCircleIcon = ({ color = '#FAAD31' }: CheckCircleIconProps) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.666 3C7.69532 3 3.66602 7.0293 3.66602 12C3.66602 16.9707 7.69532 21 12.666 21C17.6367 21 21.666 16.9707 21.666 12C21.666 7.0293 17.6367 3 12.666 3ZM16.266 9.3C16.4964 9.3 16.7367 9.37741 16.9131 9.55291C17.2641 9.90481 17.2641 10.4952 16.9131 10.8471L13.5381 14.1942C12.5022 15.2292 10.9191 15.0744 10.1064 13.8558L9.20642 12.5058C8.93102 12.0927 9.04621 11.5167 9.46021 11.2404C9.8733 10.965 10.4493 11.0802 10.7256 11.4942L11.6256 12.8442C11.8074 13.1169 12.0405 13.1601 12.2718 12.9279L15.6189 9.55291C15.7953 9.37741 16.0356 9.3 16.266 9.3Z"
      fill={color}
    />
  </svg>
);

export { CheckCircleIcon };
