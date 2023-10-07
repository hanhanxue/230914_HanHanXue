
'use client'


import styles from './EmojiSpinner.module.scss'
import Image from 'next/image'

import { useState , useEffect} from 'react'

const EmojiSpinner = () => {

    const emojiIndexOffset = 999
    
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

// const emojis1 = parseImagesIndex('public/assets.emojis')


const [currentIndex, setCurrentIndex] = useState(0)


useEffect(() => {
    // const offset = fit01(Math.random(), 999, 1999)

    const incrementEmojiIndex = () => {    
        // + 999 to prevent negative numbers from mobile elastic pulling down

        const newIndex = Math.floor((window.scrollY + emojiIndexOffset) / 100)
        setCurrentIndex((prevIndex) => (newIndex) % emojis.length)
    }

    window.addEventListener('scroll', incrementEmojiIndex)
    return(() => window.removeEventListener('scroll', incrementEmojiIndex))
}, [])




    return (
        <div className={`${styles.emoji}`}>

        <Image className={`${styles.nextImage}`}
        src={emojis[currentIndex]}
        width={24}
        height={24}
        alt={`han han xue design & product`} />

</div>
    )
}

export default EmojiSpinner