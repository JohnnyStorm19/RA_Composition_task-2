/**
 * 
 * @param принимает массив React-компонентов
 * @returns компонент Header: рендерит дочерние компоненты в блок "header"
 */

export function Header({children}: {children: React.ReactElement[]}) {
    return (
        <header className='header'>
            {
                children.map(child => {
                    return child;
                })
            }
        </header>
    )
}