import { TitleLink } from "../TitleLink";

interface IAdvertAside {
    image: string;
    data: {
        title: string;
        link: string;
    }
    description: string;
}

/**
 * 
 * @param принимает пропс типа IAdvertAside 
 * @returns компонент AdvertAside: реклама справа(Работа над ошибками)
 */

export function AdvertAside({image, data, description}: IAdvertAside) {
    return (
        <div>
            <img src={image} alt="" />
            <TitleLink item={data}/>
            {description}
        </div>
    )
}