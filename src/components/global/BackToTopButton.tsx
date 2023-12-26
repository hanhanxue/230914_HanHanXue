'use client'


// 03 REACT / NODE / NEXTJS



// 05 SUPERMANIFOLD COMPONENTS
import Button from '@/components/global/Button'

// 07 SUPERMANIFOLD FUNCTIONS


// 11 SUPERMANIFOLD STYLES
import styles from './BackToTopButton.module.scss'
import useScrollProgress from '@/lib/useScrollProgress'



interface BackToTopButtonProps {
    emojiIndexOffset?: number
    theme?: string
    isOpen?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }


  const BackToTopButton: React.FC<BackToTopButtonProps> = ({ theme = 'default' }) => {

    const scrollProgress = useScrollProgress()

    const onClick = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (

        <>
        <div className={`${styles.viewport}`}>
            
            <div className={`${styles.container}`}>
                <div className={`${styles.sideBar}`}>

                    <div className={`${styles.controlFrame} ${scrollProgress > 20 ? styles.controlFrameShow : ''}`}>
                    <Button kind = 'icon'   onClick={onClick}  theme={theme}>
                        <span className={`${styles.buttonFrame}`}> 
                            <div className={`${styles.iconFrame}`}>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 5V23" stroke="black" strokeWidth="2"/>
                                <path d="M6 13L14 5L22 13" stroke="black" strokeWidth="2"/>
                                </svg>
                            </div>
                        </span>
                    </Button>
                    </div>


                </div>


            </div>

        </div>


        </>

    )
}

export default BackToTopButton



