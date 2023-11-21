/**
 * 
 * @param принимает массив React-компонентов
 * @returns компонент Main: рендерит дочерние компоненты в блок "main"
 */

export function Main({children}: {children: React.ReactElement[]}) {
    return (
        <main className='main'>
            {
                children.map(child => {
                    return child;
                })
            }
        </main>
    )
}