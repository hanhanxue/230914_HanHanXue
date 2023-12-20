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
        <div style={{overflow:'hidden'}} ref={ref} className={styles.imageContainer}>
            <Image 
            src={src}
            fill
            alt="image"
            style={{
                opacity: inView ? 1 : 0,
            }}

        />
                <div className={styles.background} 
        style={{
            backgroundColor: "beige",
            width: "100%",
            height: "100%",
            position:"relative",
            zIndex:1,
            top: 0,
            left: inView ? "100%": "0%",
            transition: "left 1s cubic-bezier(.3, .2, .2, .8"
            
        }}></div>
        </div>

      </div>
    )
}