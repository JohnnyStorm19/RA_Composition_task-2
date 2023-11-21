import { TitleLink } from "../TitleLink";

interface IDataBlock {
    time: string;
    title: string;
    channel: string;
}

/**
 * 
 * @param принимает массив объектов типа IDataBlock 
 * @returns компонент WeatherBlock: возвращает блок "Погода"
 */

export function WeatherBlock({data}: {data: IDataBlock[]}) {
    return (
        <div className="weather-block-container">
            <TitleLink item={ {title: 'Погода', link: '#'} }/>
            {[...data].join(' ')}
        </div>

        // делаю это просто чтобы проект собрался
    )
}