import { TitleLink } from "../TitleLink";

interface IDataBlock {
    time: string;
    title: string;
    channel: string;
}

/**
 * 
 * @param принимает массив объектов типа IDataBlock 
 * @returns компонент TeleProgramBlock: возвращает блок "Телепрограмма"
 */

export function TeleProgramBlock({data}: {data: IDataBlock[]}) {
    return (
        <div className="teleprogramm-block-container">
            <TitleLink item={ {title: 'Погода', link: '#'} }/>
            {[...data].join(' ')}
        </div>

        // делаю это просто чтобы проект собрался
    )
}