
'use client'

// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS
import Image from 'next/image'
import React, { useState , useEffect, useRef} from 'react'

// 05 SUPERMANIFOLD COMPONENTS
import Button from '@/components/global/Button'

// 07 SUPERMANIFOLD FUNCTIONS
import {fit, fit01} from '@/lib/clientUtils'


// 11 SUPERMANIFOLD STYLES
import styles from './BurgerButton.module.scss'

interface BurgerButtonProps {
    isOpen?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }

  const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen = false, onClick }) => {


        const emojis = [
                "/assets/emojis/001.png",
                "/assets/emojis/002.png",
                "/assets/emojis/004.png",
                "/assets/emojis/005.png",
                "/assets/emojis/006.png",
                "/assets/emojis/007.png",
                "/assets/emojis/008.png",
                "/assets/emojis/009.png",
        ]


    const [currentIndex, setCurrentIndex] = useState(0)
    const [loopSpeed, setLoopSpeed] = useState(1)



    const intervalRef = useRef(null)


    useEffect(() => {
        // let intervalId;

        // if(loopSpeed > 0) {
        // intervalId = setInterval(() => {
        //         setCurrentIndex((prevIndex) => (prevIndex + 1) % emojis.length)
        // }, 100 / loopSpeed)
        // } else {
        // clearInterval(intervalId)
        // }

        // Initialize the interval for changing emojis
        intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % emojis.length);
      }, 100 / loopSpeed);

        return() => {
        if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        }
        }
    }, [loopSpeed])



    useEffect(() => {
        const handleLoopSpeedChange = () => {
            const newLoopSpeed = fit(window.scrollY, 0, window.innerHeight, 0, 1)
            setLoopSpeed(newLoopSpeed)
        }

        window.addEventListener('scroll', handleLoopSpeedChange)
        return () => {
            window.removeEventListener('scroll', handleLoopSpeedChange)
        }
    }, [])
  

    return (

        <>
        <Button kind = 'icon'   onClick={onClick}>
        <span className={`${styles.buttonFrame}`}> 

        <div className={`${styles.emoji}`}

        >
                <Image className={`${styles.nextImage}`}
                src={emojis[currentIndex]}
                width={24}
                height={24}
                alt={`han han xue design & product`} />



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




//     const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
//     const [emojiId, setEmojiId] = useState('001')

    
//     const startEmojiLoop = () => {
//       if (!intervalId) {
//         const id = setInterval(() => {
//             // Generate a random number between 1 and 9
//             const randomNum = Math.floor(Math.random() * 9) + 1 
//             // Format to have leading zeros if needed
//             const formattedNum = randomNum.toString().padStart(3, '0') 
//             // console.log(formattedNum)
//             setEmojiId(formattedNum)

//         }, 150)
//         setIntervalId(id)
//       }
//     }
  
//     const stopEmojiLoop = () => {
//       if (intervalId) {
//         clearInterval(intervalId)
//         setIntervalId(null)
//       }
//     }
