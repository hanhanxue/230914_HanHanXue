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
    const {color} = await getPlaiceholder(buffer)

    return (
        <div className={styles.container}>
        <p> Plaiceholder Color</p>
        <div style={{backgroundColor: color.hex}} className={styles.imageContainer}>
            <Image 
            src={src}
            fill
            alt="image"
        />
        </div>
      </div>
    )
}