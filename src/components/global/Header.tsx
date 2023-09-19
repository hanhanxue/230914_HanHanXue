

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
            // const animYRange = 240
            // // let opacity = fit(window.scrollY, window.innerHeight, window.innerHeight + animYRange, 0, 1)
            // let opacity = fit(window.scrollY, 0, animYRange, 0, 1)
            // setHeaderOpacity(opacity)

            if(window.scrollY>1) {setHeaderOpacity(1)
                 return}
                setHeaderOpacity(0)

        }

        calculateOpacity()

        window.addEventListener('scroll', calculateOpacity)
        return () => {
            window.removeEventListener('scroll', calculateOpacity)
        }
    }, [])



    

    return (
        <div className={`${styles.container}
        ${headerOpacity <= 0 ? styles.disabled : ''}`}
        style={{
            opacity: headerOpacity,
            // transform: `translate3d(0, ${fit01(headerOpacity, -16, 0)}px, 0)`
            }}>
            <header className={`${styles.header}`}>

                <div className={`${styles.tile} ${styles.tileLogo}`}>
                    
                    {/* <span className={`${styles.logoButton}`}>
                        <LogoButton />
                    </span> */}


                </div>

                <div className={`${styles.tile} ${styles.tileBurger}`}>
<BurgerButton isOpen={menuIsOpen} onClick={handleMenuClick}/>
                </div>

            </header>

        </div>

    )
}

export default Header
