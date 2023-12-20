'use client'

import Image from 'next/image'
import styles from '../static/defaultBlur.module.scss'
import {useInView} from 'react-intersection-observer'



export default function blur({src}) {

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: .5,
    })


    return (
        <div className={styles.container}>
        <p>Opacity</p>
        <div ref={ref} style={{backgroundColor: "red"}} className={styles.imageContainer}>
            <Image 
            src={src}
            fill
            alt="image"
            style={{
                opacity: inView ? 1 : 0,
                transition: 'opacity 1s cubic-bezier(.3, .2, .2, .8)'
            }}

        />
        </div>
      </div>
    )
}