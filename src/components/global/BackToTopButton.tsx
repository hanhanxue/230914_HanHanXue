

// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS



// 05 SUPERMANIFOLD COMPONENTS
import Button from '@/components/global/Button'

// 07 SUPERMANIFOLD FUNCTIONS
import {fit, fit01} from '@/lib/clientUtils'

import { parseImagesIndex } from '@/lib/serverUtils'


// 11 SUPERMANIFOLD STYLES
import styles from './BackToTopButton.module.scss'


interface BackToTopProps {
    emojiIndexOffset?: number
    theme?: string
    isOpen?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }




  const BackToTop: React.FC<BackToTopProps> = ({ 
    isOpen = false, 
    onClick, theme = 'default', 
    emojiIndexOffset = 999 }) => {

    const styleTheme = () => {
        switch (theme) {
            case 'dark':
                return `${styles.dark}`
            
            default:
                return `${styles.default}`
        }
    }


    return (

        <>
        <Button kind = 'icon'   onClick={onClick}  theme={theme}>
        <span className={`${styles.buttonFrame}`}> 

        <div className={`${styles.iconFrame}
         ${isOpen ? styles.menuOpen : ''}
        `}
      >



<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6V24" stroke="black" stroke-width="2"/>
<path d="M7 14L15 6L23 14" stroke="black" stroke-width="2"/>
</svg>


        </div>
        </span>
        </Button>

        </>

    )
}

export default BackToTop



