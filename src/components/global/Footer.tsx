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
                <span >{`Montréal`}</span>
                <span ref={currentTimeRef} />
                </div>


                <ul className={`${styles.social}`}>
                <li><Link href="https://github.com/hanhanxue" rel="noopener noreferrer" target="_blank">GitHub</Link></li>
                <li><Link href="https://www.instagram.com/_hanhanxue_/" rel="noopener noreferrer" target="_blank">Instagram</Link></li>
                <li><Link href="https://twitter.com/_hanhanxue_" rel="noopener noreferrer" target="_blank">X</Link></li>
                <li><Link href="https://www.linkedin.com/in/hanhanxue/" rel="noopener noreferrer" target="_blank">LinkedIn</Link></li>
                </ul>
            </div>

           
        </div>


        </footer>

    )

}

export default Footer