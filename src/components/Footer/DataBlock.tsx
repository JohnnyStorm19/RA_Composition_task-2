import { OnAirBlock } from "../BlockTypes/OnAirBlock";
import { RecentBlock } from "../BlockTypes/RecentBlock";
import { TeleProgramBlock } from "../BlockTypes/TeleProgramBlock";
import { WeatherBlock } from "../BlockTypes/WeatherBlock";

/**
 * 
 * @param принимает массив объектов типа INews 
 * @returns компонент DataBlock: принимает тип блока и какие-то данные. В зависимости от типа рендерит соответствующий блок, куда мы пробрасываем данные
 */

interface IData {
    time: string;
    title: string;
    channel: string;
}

interface IDataBlock {
    type: string[];
    data: IData[] // тут должен быть сложный объект с различными данными в зависимости от типа блока. Упростим для примера и запишем тип телепрограммы и пробросим во всех блоках для простоты
}

export function DataBlock({type, data}: IDataBlock) {
    return (
        <div>
            {
                type.map(type => {
                    switch (type) {
                        case 'weather':
                            return <WeatherBlock data={data}/>;
                        case 'recent':
                            return <RecentBlock data={data}/>;
                        case 'teleprogramm':
                            return <TeleProgramBlock data={data}/>;
                        case 'onAir':
                            return <OnAirBlock data={data}/>;
                        default:
                            break;
                    }
                })
            }
        </div>
    )
}