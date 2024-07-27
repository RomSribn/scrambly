import type { NextApiRequest, NextApiResponse } from 'next';

const SUCCESS_MESSAGE = 'The user has successfully withdrawn the money';

type ResponseData = {
  message: string;
};

function logWithdrawal(amount: number, cardType: string) {
  const timestamp = new Date().toISOString();
  const border = '='.repeat(50);

  console.log(border);
  console.log('\x1b[32m%s\x1b[0m', `🎉 ${SUCCESS_MESSAGE} 🎉`);
  console.log(border);
  console.log('\x1b[33m%s\x1b[0m', `Timestamp: ${timestamp}`);
  console.log('\x1b[34m%s\x1b[0m', `Amount: $${amount.toFixed(2)}`);
  console.log('\x1b[31m%s\x1b[0m', `Card Type: ${cardType.toUpperCase()}`);
  console.log(border);
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  logWithdrawal(2.02, 'visa');
  res.status(200).json({ message: SUCCESS_MESSAGE });
}
