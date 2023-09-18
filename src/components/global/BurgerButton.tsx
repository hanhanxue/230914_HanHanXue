
'use client'

// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS
import Image from 'next/image'
import React, { useState , useEffect} from 'react'

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



    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
    const [emojiId, setEmojiId] = useState('001')
    
    const startEmojiLoop = () => {
      if (!intervalId) {
        const id = setInterval(() => {
            // Generate a random number between 1 and 9
            const randomNum = Math.floor(Math.random() * 9) + 1 
            // Format to have leading zeros if needed
            const formattedNum = randomNum.toString().padStart(3, '0') 
            // console.log(formattedNum)
            setEmojiId(formattedNum)

        }, 150)
        setIntervalId(id)
      }
    }
  
    const stopEmojiLoop = () => {
      if (intervalId) {
        clearInterval(intervalId)
        setIntervalId(null)
      }
    }


  

    return (

        <>
        <Button kind = 'icon'   onClick={onClick}>
        <span className={`${styles.buttonFrame}`}> 

        <div className={`${styles.emoji}`}
        onMouseEnter={startEmojiLoop} 
        onMouseLeave={stopEmojiLoop} 
        >


            {emojiId === '001' ? (
                    <Image className={`${styles.nextImage}`}
                    src={`/assets/emojis/001.png`}
                    width={24}
                    height={24}
                    alt={`han han xue design & product`} />
            ) : null}
            {emojiId === '002' ? (
                    <Image className={`${styles.nextImage}`}
                    src={`/assets/emojis/002.png`}
                    width={24}
                    height={24}
                    alt={`han han xue design & product`} />
            ) : null}
            {emojiId === '003' ? (
                    <Image className={`${styles.nextImage}`}
                    src={`/assets/emojis/002.png`}
                    width={24}
                    height={24}
                    alt={`han han xue design & product`} />
            ) : null}
            {emojiId === '004' ? (
                    <Image className={`${styles.nextImage}`}
                    src={`/assets/emojis/004.png`}
                    width={24}
                    height={24}
                    alt={`han han xue design & product`} />
            ) : null}
            {emojiId === '005' ? (
                    <Image className={`${styles.nextImage}`}
                    src={`/assets/emojis/005.png`}
                    width={24}
                    height={24}
                    alt={`han han xue design & product`} />
            ) : null}
            {emojiId === '006' ? (
                    <Image className={`${styles.nextImage}`}
                    src={`/assets/emojis/006.png`}
                    width={24}
                    height={24}
                    alt={`han han xue design & product`} />
            ) : null}
            {emojiId === '007' ? (
                    <Image className={`${styles.nextImage}`}
                    src={`/assets/emojis/007.png`}
                    width={24}
                    height={24}
                    alt={`han han xue design & product`} />
            ) : null}
            {emojiId === '008' ? (
                    <Image className={`${styles.nextImage}`}
                    src={`/assets/emojis/008.png`}
                    width={24}
                    height={24}
                    alt={`han han xue design & product`} />
            ) : null}
            {emojiId === '009' ? (
                    <Image className={`${styles.nextImage}`}
                    src={`/assets/emojis/009.png`}
                    width={24}
                    height={24}
                    alt={`han han xue design & product`} />
            ) : null}






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