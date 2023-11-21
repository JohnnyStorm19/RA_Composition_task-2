interface IAdvData {
    url: string;
}

/**
 * 
 * @param принимает объект типа IAdvData 
 * @returns компонент AdvBannerMain: главный рекламный баннер под виджетом поиска
 */

export function AdvBannerMain({advData}: {advData: IAdvData}) {
    return (
        <div className="adv-banner main">
            <picture>
                <source />
                <img src={advData.url} alt="Баннер какой-то рекламы"/>
            </picture>
        </div>
    )
}