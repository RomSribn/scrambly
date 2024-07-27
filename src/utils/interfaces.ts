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

interface IconCommonProps {
  className?: string;
  /**
   * The fill of the icon.
   */
  color?: string;
}

export { CardType }; // Exporting the enum
export type { Card, IconCommonProps }; // Exporting the interface
