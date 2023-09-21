
import Button from '@/components/global/Button'
import Image from 'next/image'

import styles from './LogoButton.module.scss'


const LogoButton = () => {


    return (
                            
        <Button>
        <span className={` body-xl ${styles.buttonFrame}`}>
        <span className={` body-xl ${styles.logotype}`}>Han Han Xue</span>
       
       
       
        <span className={` body-xl ${styles.tagline}`}>
        
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="14" width="30" height="2" fill="black"/>
        </svg>
     
        Designer
        <div className={`${styles.emoji}`}>
        {/* <Image className={`${styles.nextImage}`}
        src="/assets/emojis/_archive/brain_1f9e0.png"
        width={24}
        height={24}
        // layout="responsive"
        alt={`han han xue design & product`}
        >
        </Image>           */}
</div>

        </span>




        </span>

        </Button>

    )
}

export default LogoButton