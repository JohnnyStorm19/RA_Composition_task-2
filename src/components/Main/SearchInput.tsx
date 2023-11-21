interface ISearchInputData {
    footerMain: string;
    footerExample: string;
}

/**
 * 
 * @param принимает объект типа ISearchInputData 
 * @returns компонент SearchInput: поисковый виджет + футер виджета с фразой "Найдется все. Например, ..."
 */

export function SearchInput({data}: {data: ISearchInputData}) {
    return (
        <>
            <a href="#main">
                <img src="#" alt="На главную страницу" />
            </a>
            <form className="search-form" action="">
                <input className="search-input" type="search" name="" id="" />
                <button className="search-btn-keyboard" type="button"></button>
                <button className="search-btn-submit" type="submit">Найти</button>
            </form>
            <span className="search-footer">
                <p className="search-footer-main">
                    {data.footerMain}
                    <span className="search-footer-example">{data.footerExample}</span>
                </p>
            </span>
        </>
    )
}