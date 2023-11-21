import { DateAside } from "./DateAside";
import { TitleLink } from "../TitleLink";

interface ITitleLink {
    title: string;
    link: string;
}

/**
 * 
 * @param принимает массив объектов типа ITitleLink 
 * @returns компонент HeaderNewsLinks: темы новостей в хэдере (роуты по темам в новостях) + текущая дата
 */

export function HeaderNewsLinks({data}: {data: ITitleLink[]}) {
    return (
        <>
            <ul className="header-news-links-container">
                {
                    data.map((item, id) => {
                        return <TitleLink key={id} item={item}/>
                    })
                }
            </ul>
            <DateAside />
        </>
    )
}