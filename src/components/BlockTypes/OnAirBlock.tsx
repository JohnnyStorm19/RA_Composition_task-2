import { TitleLink } from "../TitleLink";

interface IDataBlock {
    time: string;
    title: string;
    channel: string;
}

/**
 * 
 * @param принимает массив объектов типа IDataBlock 
 * @returns компонент OnAirBlock: возвращает компонент "Эфир"
 */

export function OnAirBlock({data}: {data: IDataBlock[]}) {
    return (
        <div className="onair-block-container">
            <TitleLink item={ {title: 'Погода', link: '#'} }/>
            {[...data].join(' ')}
        </div>

        // делаю это просто чтобы проект собрался
    )
}