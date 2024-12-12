export interface IProduct {
    id: string;
    title: string;
    description: string;
    price: number;
    amount: number;
    newPrice: number;
}

export interface ITemporaryOrder {
    status:  string, 
    totalAmount: number;  
    address: string; 
    paymentMethod: string;  
    comment: string; 
    userId: string;
    username: string; 
    orderNumber: string;
    products: IProduct[]  
}

export interface IEditOrder extends ITemporaryOrder {
    id: string;
    totalPrice: number;
}

export interface IAllOrders extends IEditOrder {
    createdAt: string;
    updatedAt: string;
}
