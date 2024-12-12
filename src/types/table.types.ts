export interface IDataHistory {
    date: string,
    customerId: string,
    amount: number,
}

export interface ICreateData {
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    price: number,
    history: IDataHistory[]
}

export interface IColumn {
    id: "name" | "code" | "population" | "size" | "density";
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
}
