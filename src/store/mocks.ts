import { Card, CardType } from 'utils/interfaces';

export const cards: Card[] = [
  {
    id: 1,
    type: CardType.Visa,
    price: 1,
    bonus: 2,
    commission: 0.25 // 250 coins after the second withdrawal
  },
  {
    id: 2,
    type: CardType.Visa,
    price: 2,
    bonus: 2
  },
  {
    id: 3,
    type: CardType.Visa,
    price: 5,
    commission: 0.25 // 250 coins after the second withdrawal
  },
  {
    id: 4,
    type: CardType.Amazon,
    price: 10
  },
  {
    id: 5,
    type: CardType.Amazon,
    price: 20,
    bonus: 2
  },
  {
    id: 6,
    type: CardType.Amazon,
    price: 50
  }
];
