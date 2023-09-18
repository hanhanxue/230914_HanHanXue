


// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS
import Image from 'next/image'
import React, { useState } from 'react'

// 05 SUPERMANIFOLD COMPONENTS
import Button from '@/components/global/Button'

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES
import styles from './BurgerButton.module.scss'

interface BurgerButtonProps {
    isOpen?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }

  const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen = false, onClick }) => {



    // const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
    // const [imageName, setImageName] = useState('001.png')
    // const startEmojiLoop = () => {
    //   if (!intervalId) {
    //     const id = setInterval(() => {
    //         // Generate a random number between 1 and 9
    //         const randomNum = Math.floor(Math.random() * 9) + 1 
    //         // Format to have leading zeros if needed
    //         const formattedNum = randomNum.toString().padStart(3, '0') 
    //         console.log(`${formattedNum}.png`)
    //     }, 50)
    //     setIntervalId(id)
    //   }
    // }
  
    // const stopEmojiLoop = () => {
    //   if (intervalId) {
    //     clearInterval(intervalId)
    //     setIntervalId(null)
    //   }
    // }
  

    return (

        <>
        <Button kind = 'icon'   onClick={onClick}>
        <span className={`${styles.buttonFrame}`}> 

        <div className={`${styles.emoji}`}
        // onMouseEnter={startEmojiLoop} 
        // onMouseLeave={stopEmojiLoop} 
        >
            <Image className={`${styles.nextImage}`}
            src={`/assets/emojis/001.png`}
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