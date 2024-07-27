import React from 'react';
import { useTypedSelector } from 'store/store';

const Home = () => {
  const { cardList } = useTypedSelector((state) => state.cards);

  return (
    <div>
      {cardList.map((card) => <div>{card.type}</div>)}
    </div>
  );
};

export default Home;
