import Image from 'next/image'
import styles from '../defaultBlur.module.scss'


import {getPlaiceholder} from 'plaiceholder'
import fs from "node:fs/promises"
import path from "path"

export default async function blur({src}) {

    const root = process.cwd()
    const imagePath = path.join(root, 'public', src)
    console.log(imagePath)
    const buffer = await fs.readFile(`./public${src}`)
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