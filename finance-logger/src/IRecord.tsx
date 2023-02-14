export interface IRecord {
    type: string;
    person: string;
    details: string;
    amount: number;
    readonly id?: number;
}