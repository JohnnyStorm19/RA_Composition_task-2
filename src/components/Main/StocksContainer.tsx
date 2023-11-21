import { StockItem } from "../StockItem";

interface IStockItem {
    currency: string;
    quantity: number;
    gain: number;
    link: string;
    stockMarket?: string;
}

/**
 * 
 * @param принимает массив объектов типа IStockItem 
 * @returns компонент StocksContainer: контейнер с показателями биржи (USD, EUR, нефть и т.д.)
 * Рендерит только 3 айтема
 */

export function StocksContainer({data}: {data: IStockItem[]}) {
    return (
        <ul className="stocks-container">
            {
                data.map((item, i) => {
                    if (i > 3) return
                    return <StockItem data={item}/>
                })
            }
            ...
        </ul>
    )
}