interface INews {
    icon: string;
    title: string;
    link: string;
}

/**
 * 
 * @param принимает объект типа INews 
 * @returns компонент NewsItem: новость с иконкой
 */

export function NewsItem({newsData}: {newsData: INews}) {
    return (
        <li className='news-item-container'>
            <a className="news-item-link" href={newsData.link}>
                <span className='news-item-icon' style={ {'backgroundImage': newsData.icon} }></span>
                <p className="news-item-title"> {newsData.title} </p>
            </a>
        </li>
    )
}