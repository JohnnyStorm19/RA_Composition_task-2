/**
 * 
 * @param принимает массив React-компонентов
 * @returns компонент Footer: рендерит дочерние компоненты в блок "footer"
 */

export function Footer({children}: {children: React.ReactElement[]}) {
    return (
        <footer className='footer'>
            {
                children.map(child => {
                    return child;
                })
            }
        </footer>
    )
}