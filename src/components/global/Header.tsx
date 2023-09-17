

'use client'


import {useState, useEffect} from 'react'

import {fit, fit01} from '@/lib/clientUtils'


import BurgerButton from '@/components/global/BurgerButton'
import LogoButton from '@/components/global/LogoButton'

import styles from './Header.module.scss'

const Header = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [headerOpacity, setHeaderOpacity] = useState(0)

    const handleMenuClick = () => {
        setMenuIsOpen((current) => !current)
    }
    

    useEffect(() => {

        const calculateOpacity = () => {
            // if (window.scrollY < window.innerHeight) setHeaderOpacity(0)
            const animYDist = 240
            let opacity = fit(window.scrollY, window.innerHeight, window.innerHeight + animYDist, 0, 1)
            setHeaderOpacity(opacity)
    
        }

        calculateOpacity()

        window.addEventListener('scroll', calculateOpacity)
        return () => {
            window.removeEventListener('scroll', calculateOpacity)
        }
    })

    return (
        <div className={`${styles.container}
        ${headerOpacity <= 0 ? styles.disabled : ''}`}
        style={{
            opacity: headerOpacity,
            // transform: `translate3d(0, ${fit01(headerOpacity, -16, 0)}px, 0)`
            }}>
            <header className={`${styles.header}`}>

                <div className={`${styles.tile} ${styles.tileLogo}`}>
                    
                <LogoButton
                 />


                </div>

                <div className={`${styles.tile} ${styles.tileBurger}`}>
<BurgerButton isOpen={menuIsOpen} onClick={handleMenuClick}/>
                </div>

            </header>

        </div>

    )
}

export default Header
