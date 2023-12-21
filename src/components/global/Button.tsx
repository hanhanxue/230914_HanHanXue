
import styles from './Button.module.scss'


interface ButtonProps {
    children: React.ReactNode
    kind?: string
    size?: string
    theme?: string
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }


  // Button variants
    //  Primary button
    //  Secondary button
    //  Tertiary button
    //  Danger button
    //  Ghost button

    // Contained button
    // Outlined button
    // Ghost button
    // Icon button

const Button: React.FC<ButtonProps> = ( {children, 
    kind = 'default',
    size = 'default',
    theme = 'default',
    onMouseEnter, onMouseLeave, onClick} ) => {

        const styleKind = () => {
            switch (kind) {
                case 'icon':
                    return `${styles.icon}`
                case 'ghost':
                    return `${styles.ghost}`
                
                default:
                    return `${styles.default}`
            }
        }

        const styleTheme = () => {
            switch (theme) {
                case 'dark':
                    return `${styles.dark}`
                
                default:
                    return `${styles.default}`
            }
        }

    return (

        <button 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        
        className={`${styles.button} ${styleKind()} ${styleTheme()}`}>
            {children}
        </button>

    )
}

export default Button
