
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
    theme?: string
    isOpen?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }

  const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen = false, onClick, theme = 'default' }) => {

    const styleTheme = () => {
        switch (theme) {
            case 'dark':
                return `${styles.dark}`
            
            default:
                return `${styles.default}`
        }
    }

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

    const numEmojis = emojis.length


    const [currentIndex, setCurrentIndex] = useState(0)


    useEffect(() => {
        const offset = fit01(Math.random(), 999, 1999)

        const incrementEmojiIndex = () => {    
            // + 999 to prevent negative numbers from mobile elastic pulling down
            
            
            const newIndex = Math.floor((window.scrollY + offset) / 100)
            setCurrentIndex((prevIndex) => (newIndex) % numEmojis)
        }

        window.addEventListener('scroll', incrementEmojiIndex)
        return(() => window.removeEventListener('scroll', incrementEmojiIndex))
    }, [])
  

    return (

        <>
        <Button kind = 'icon'   onClick={onClick}  theme={theme}>
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



            <div className={`${styles.icon} ${styleTheme()}`}>
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



// const [intervalDuration, setIntervalDuration] = useState(500)

// useEffect(() => {

//     const handleIntervalDurationChange = () => {
//     const YRange = window.innerHeight

//     const minIntervalDuration = 50
//     const maxIntervalDuration = 200

//     let newIntervalDuration = 9999

//     if(window.scrollY > YRange) {
//             newIntervalDuration = minIntervalDuration
//             return
//     }

//     newIntervalDuration = fit(window.scrollY, 0, window.innerHeight, maxIntervalDuration, minIntervalDuration)

//     setIntervalDuration(newIntervalDuration)
//     // console.log(`var: ${newIntervalDuration}, state: ${intervalDuration}`)

//     //     let intervalId = setInterval(request, intervalDuration); // start setInterval as "intervalId"
    
//     //     function request() {
        
//     //         console.log(intervalDuration); // firebug or chrome log
//     //         setCurrentIndex((prevIndex) => (prevIndex + 1) % emojis.length)
//     //         clearInterval(intervalId); // stop the setInterval()

        
//     //         intervalId = setInterval(request, intervalDuration); // start the setInterval()
//     //     }


//     }

//     window.addEventListener('scroll', handleIntervalDurationChange)
//     return () => {
//         window.removeEventListener('scroll', handleIntervalDurationChange)
//     }
// }, [])

// useEffect(() => {
//     const request = () => {
//             console.log(intervalDuration)
//             clearInterval(intervalId)

//     }

//     let intervalId = setInterval(request, intervalDuration)



// },[intervalDuration])
