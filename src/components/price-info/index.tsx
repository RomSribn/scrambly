import { useTypedSelector } from 'store/store';
import { selectUserState, selectUiState, selectWithdrawState } from 'store/slices';
import { CoinIcon } from 'assets/icons/index';

import { WarningMessage } from './warning-message';

const NO_COMMISION = 'No commission';

interface PriceInfoProps {
  price: number;
  commission?: number;
}

const PriceInfo = ({ commission }: PriceInfoProps) => {
  const { selectedCardId } = useTypedSelector(selectWithdrawState);
  const { balance, withdrawalsCount } = useTypedSelector(selectUserState);
  const { errorMessage } = useTypedSelector(selectUiState);

  const isCommission = selectedCardId && withdrawalsCount[selectedCardId];
  const commissionMessage = isCommission && commission ? `${commission * 1000} coins commission` : NO_COMMISION;
  return (
    <div className="flex justify-between items-center py-2 px-4">
      <div>
        <span className="flex text-lg font-semibold text-gray-800">Price</span>
        <WarningMessage message={errorMessage} />
      </div>
      <div>
        <div className="flex items-center justify-end font-bold px-2 py-1">
          <CoinIcon />
          <span className="text-sm font-medium">{balance}</span>
        </div>
        <span className="text-sm text-gray-600 uppercase">{commissionMessage}</span>
      </div>
    </div>
  );
};

export default PriceInfo;
