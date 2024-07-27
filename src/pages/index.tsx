import Link from 'next/link';

import { PriceInput } from 'components/index';

const Home = () => (
  <div className="h-[80vh] flex flex-col items-center justify-center">
    <PriceInput />
    <Link href="/withdraw" className="mt-[10px] ">
      <span className="whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">go to withdraw</span>
    </Link>
  </div>
);

export default Home;
