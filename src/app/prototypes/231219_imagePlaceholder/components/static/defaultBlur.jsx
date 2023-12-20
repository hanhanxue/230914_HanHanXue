import Image from 'next/image'
import styles from './defaultBlur.module.scss'

export default function defaultBlur({src}) {
    return (
        <div className={styles.container}>
        <p>Blur</p>
        <div className={styles.imageContainer}>
            <Image 
            src={src}
            // fill
            alt="image"
            placeholder='blur'
        />
        </div>
      </div>
    )
}