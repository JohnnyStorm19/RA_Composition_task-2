import { TitleLink } from "../TitleLink";

interface ITitleLink {
    title: string;
    link: string;
}

/**
 * 
 * @param принимает массив объектов типа ITitleLink 
 * @returns компонент SectionsRow: ссылки для перехода НАД поисковым инпутом
 */

export function SectionsRow({data}: {data: ITitleLink[]}) {
    return (
        <>
            <ul className="sections-row-links-container">
                {
                    data.map(item => {
                        return <TitleLink item={item}/>
                    })
                }
            </ul>
        </>
    )
}