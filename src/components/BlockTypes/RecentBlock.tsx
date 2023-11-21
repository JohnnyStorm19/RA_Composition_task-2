import { TitleLink } from "../TitleLink";

interface IDataBlock {
    time: string;
    title: string;
    channel: string;
}

/**
 * 
 * @param принимает массив объектов типа IDataBlock 
 * @returns компонент RecentBlock: возвращает блок "Посещаемое"
 */

export function RecentBlock({data}: {data: IDataBlock[]}) {
    return (
        <div className="recent-block-container">
            <TitleLink item={ {title: 'Погода', link: '#'} }/>
            {[...data].join(' ')}
        </div>

        // делаю это просто чтобы проект собрался
    )
}