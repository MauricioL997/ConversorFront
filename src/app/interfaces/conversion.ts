export interface Conversion {
    conversionId: number;
    userId: number;
    fromCurrency: string;
    toCurrency: string;
    amount: number;
    result: number;
    date: Date;
  }
  