interface ITableHeader {
    id: number;
    label: string;
    position: "right" | "center" | "inherit" | "left" | "justify" | undefined;
}

export const tableHeader:ITableHeader[] = [
    {id: 1, label: '', position: 'left'},
    {id: 2, label: 'Клиента', position: 'left'},
    {id: 3, label: 'Номер заказа', position: 'center'},
    {id: 4, label: 'Дата приема', position: 'center'},
    {id: 5, label: 'Статус заказа', position: 'center'},
    {id: 6, label: 'Общая сумма', position: 'center'},
    {id: 7, label: 'Метод оплаты', position: 'center'},
    {id: 8, label: 'Действия', position: 'right'},
]