export interface Currency {
    id?: number; // opcional si se usa para nuevas monedas
    code: string;
    legend: string;
    symbol: string;
    convertibilityIndex: number;
    isActive: boolean;
}
