'use client'

import { useState } from 'react'
import {useRouter} from 'next/navigation'

import Button from '@/components/global/Button'

import styles from './ContactButton.module.scss'


const ContactButton = () => {


    const [buttonLabel, setButtonLabel] = useState(`Let’s chat`)

    const router = useRouter()

    const handleOnMouseEnter = () => {
        setButtonLabel(`hello@hanhanxue.com`)
        // navigator.clipboard.writeText(`LOL`)
    }

    const handleOnMouseLeave = () => {
        setButtonLabel(`Let’s chat`)
    }

    const handleOnClick = () => {
        router.push(`mailto:hello@hanhanxue.com`)
    }

    
    return (
        <>
        


        <Button
        kind={'ghost'}
            // onMouseEnter={handleOnMouseEnter}
            // onMouseLeave={handleOnMouseLeave}
            onClick={handleOnClick}>

                <span className={`  ${styles.buttonFrame}   `}>

                    {/* <div className={`  ${styles.buttonPingIcon}   `}>
                        <span  className={`  ${styles.buttonPingDot}   `}></span>
                        <span  className={`  ${styles.buttonPingRing}   `}></span>
                    </div> */}


                <div className={`  ${styles.buttonLabelIcon}   `}>
                    
                    <h2  className={`  body-xl   `} >{buttonLabel}</h2>


                    <svg className={`${styles.buttonIcon}`}
                    width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_523_60)">
                    <rect x="2" width="12" height="2" />
                    <rect x="12" width="2" height="12" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 13.9999V12.5858L11.293 1.29285L12.7072 2.70706L1.41424 14H0.000122249L0 13.9999Z" />
                    </g>
                    </svg>

                </div>

                </span>
                
              
        </Button>

        </>
    )





}


export default ContactButton