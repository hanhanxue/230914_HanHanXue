"use client"

import Link from 'next/link'

import {useRef, useEffect} from 'react'

import styles from './Footer.module.scss'

const Footer = () => {

    const currentTimeRef = useRef<HTMLSpanElement | null>(null)

    useEffect(() => {

        const updateCurrentTime = () => {
            const currentTime = new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" }) // Set time zone to EST
            // const currentTime = new Date().toLocaleTimeString("en-US") // Set time zone to EST

            if(currentTimeRef.current) {
                currentTimeRef.current.textContent = currentTime;
            }
        }

        updateCurrentTime()

        const intervalId = setInterval(updateCurrentTime, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <footer  className={`${styles.section}`}>
    
        <div className={`${styles.container} framex body`}>

            <div className={`${styles.gridItem}`}>
                <span>{`©${new Date().getFullYear()}`}</span>
            </div>

            <div className={`${styles.gridItem}`}>
        
                {/* <span className={`body`} >{`Montréal モントリオール `}<span ref={currentTimeRef} /></span> */}
                <div className={styles.time} >
                <span >{`Montréal EST`}</span>
                <span ref={currentTimeRef} />
                </div>


                <div className={`${styles.social}`}>
                    <Link className={`  `} href={`/`} >
                    <span>Github</span>
                    </Link>
                    <Link className={`  `} href={`/`} >
                        <span>Instagram</span>
                    </Link>
                    <Link className={`  `} href={`/`} >
                        <span>X</span>
                    </Link>
                    <Link className={`  `} href={`/`} >
                        <span>Linkedin</span>
                    </Link>
                </div>
            </div>


        </div>


        </footer>

    )

}

export default Footer