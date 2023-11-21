interface ITitleLink {
    title: string;
    link: string;
}

/**
 * 
 * @param принимает объект типа ITitleLink 
 * @returns компонент TitleLink: ссылка + название
 * TitleLink - компоненты с ссылками по всей странице (с синим шрифтом)
 * Стилизация (в основном размер и жирность шрифта) будет в зависимости от родительского компонента в котором мы их отрендерим
 */

export function TitleLink({item}: {item: ITitleLink}) {
    return (
        <li>
            <a href={item.link}>
                {item.title}
            </a>
        </li>
    )
}