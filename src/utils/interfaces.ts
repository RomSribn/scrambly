enum CardType {
  Visa = 'visa',
  Amazon = 'amazon'
}

interface Card {
  id: number;
  type: CardType;
  price: number;
  bonus?: number;
  commission?: number;
}

export { CardType }; // Exporting the enum
export type { Card }; // Exporting the interface
