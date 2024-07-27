import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setBalance } from 'store/slices';

const PriceInput = () => {
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
        Price
      </label>
      <div className="flex gap-2">
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[36px]"
          onClick={() => dispatch(setBalance(price))}>
          Button
        </button>
      </div>
    </div>
  );
};

export default PriceInput;
