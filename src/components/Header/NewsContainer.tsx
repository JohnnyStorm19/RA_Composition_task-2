import { NewsItem } from "../NewsItem";

interface INews {
    icon: string;
    title: string;
    link: string;
}

interface INewsProps {
    data: INews[];
}

/**
 * 
 * @param принимает массив объектов типа INews 
 * @returns компонент News: блок с новостями
 */

export function NewsContainer({data}: INewsProps) {
    return (
        <ul className="header-news-container">
            {
                data.map((news, id) => {
                    return <NewsItem key={id} newsData={news}/>
                })
            }
        </ul>
    )
}