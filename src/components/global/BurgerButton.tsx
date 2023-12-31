

// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS



// 05 SUPERMANIFOLD COMPONENTS
import Button from '@/components/global/Button'

// 07 SUPERMANIFOLD FUNCTIONS
import {fit, fit01} from '@/lib/fitRange'

import { parseImagesIndex } from '@/lib/serverUtils'


// 11 SUPERMANIFOLD STYLES
import styles from './BurgerButton.module.scss'


interface BurgerButtonProps {
    emojiIndexOffset?: number
    theme?: string
    isOpen?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }




  const BurgerButton: React.FC<BurgerButtonProps> = ({ 
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
