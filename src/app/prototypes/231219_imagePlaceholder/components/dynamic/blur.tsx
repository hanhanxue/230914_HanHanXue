import Image from 'next/image'
import styles from '../static/defaultBlur.module.scss'


import {getPlaiceholder} from 'plaiceholder'


export default async function blur({src}) {

    const buffer = await fetch(src).then(async (res) => {

        return Buffer.from(await res.arrayBuffer())

    })

    const {base64} = await getPlaiceholder(buffer)

    return (
        <div className={styles.container}>
        <p>Plaiceholder Blur</p>
        <div className={styles.imageContainer}>
            <Image 
            src={src}
            fill
            alt="image"
            placeholder='blur'
            blurDataURL={base64}
        />
        </div>
      </div>
    )
}