
// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS
import Image from 'next/image';

// 05 SUPERMANIFOLD COMPONENTS
import Button from '@/components/global/Button'

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES
import styles from './BurgerButton.module.scss'

interface BurgerButtonProps {
    isOpen?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }

  const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen = false, onClick }) => {



    return (

        <>
        <Button kind = 'icon'   onClick={onClick}>
        <span className={`${styles.buttonFrame}`}> 
        <div className={`${styles.emoji}`}>
            <Image className={`${styles.nextImage}`}
            src="/assets/emojis/001.png"
            width={24}
            height={24}
            // layout="responsive"
            alt={`han han xue design & product`}
            >
            </Image>          
        </div>
    
        <div className={`${styles.iconFrame}
         ${isOpen ? styles.menuOpen : ''}
        `}
      >



            <div className={`${styles.icon}`}>
                <span className={`${styles.iconStroke}`}></span>
                <span className={`${styles.iconStroke}`}></span>
                <span className={`${styles.iconStroke}`}></span>
            </div>
        </div>
        </span>
        </Button>

        </>

    )
}

export default BurgerButton


{/* <button 
className={`${styles.menuButton}
${isOpen ? styles.menuButtonOpen : ''}
`}

onClick={onClick}>

</button> */}