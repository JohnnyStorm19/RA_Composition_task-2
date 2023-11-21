interface IStockItem {
    currency: string;
    quantity: number;
    gain: number;
    link: string;
    stockMarket?: string;
}

/**
 * 
 * @param принимает объект типа IStockItem 
 * @returns компонент StockItem: показатели с биржи (USD, EUR, нефть и т.д.)
 */

export function StockItem({data}: {data: IStockItem}) {
    return (
        <li className="stockitem-container">
            <a href={data.link} className="stockitem-link">
                <span className="stockitem-bold">
                    {`${data.currency} ${data.stockMarket || ''} ${data.quantity}`}
                </span>
                <span className="stockitem-regular">
                    {`${data.gain}%`}
                </span>
            </a>
        </li>
    )
}