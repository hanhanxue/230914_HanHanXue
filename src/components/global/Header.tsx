

'use client'


import {useState, useEffect} from 'react'

import {fit, fit01} from '@/lib/clientUtils'
import useFirstRender from '@/lib/useFirstRender'

import Link from 'next/link'


import BurgerButton from '@/components/global/BurgerButton'
import LogoButton from '@/components/global/LogoButton'

import styles from './Header.module.scss'

const Header = () => {

    const maxDelayDuration = 350
    const firstRender = useFirstRender()



    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrollInit, setIsScrollInit] = useState(0)

    const [delayDurations, setDelayDurations] = useState(new Array(10).fill(0))


    const generateDelayDurations = (size: number) => {
        let newDelayDurations = [];
        for (let i = 1; i <= size; i++) {
            newDelayDurations.push(Math.random())
        }
        // remap to curve and range
        newDelayDurations = newDelayDurations.map(num => {
            return Math.round(num * num * maxDelayDuration)
        })
    
        return newDelayDurations
    }

    const handleMenuClick = () => {
        setIsMenuOpen((current) => !current)
        setDelayDurations(generateDelayDurations(10))
    }
    



    useEffect(() => {

        const handleScroll = () => {

            if(isScrollInit) return;
            if(window.scrollY > 1) setIsScrollInit(1)
        }
        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDelayDurations(new Array(10).fill(0))
        }, maxDelayDuration)
        return () => clearTimeout(timeout)
    }, [isMenuOpen])

    

    return (
        <div className={`${styles.container}`}
        style={{
            opacity: `${isScrollInit ? '1' : '0'}`,

            
            }}>



        <header className={`${styles.headerDefault}`} >
            <div className={`${styles.tile} ${styles.tileLogo}`}  >
                {/* <LogoButton /> */}
            </div>

            <div className={`${styles.tile} ${styles.tileBurger}`}  >
                <div style={{pointerEvents: `${isScrollInit ? 'all' : 'none'}`}}>

                <BurgerButton isOpen={isMenuOpen} onClick={handleMenuClick}/>
                </div>
            </div>
        </header>














            {/* OVERLAY */}
            <div className={`${styles.overlay}`}
            style={{pointerEvents: `${isMenuOpen ? 'all': 'none'}`}}
            > 
            <header className={`${styles.header}`}>

            {/* TILE */}
            <div className={`${styles.tile} ${styles.tileLogo}  `}
            style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[0]}ms`
            }}>
        
                {/* <LogoButton /> */}
            </div>

            {/* TILE */}    
            <div className={`${styles.tile} ${styles.tileBurger}  `}
        style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[1]}ms`
            }}>

                <BurgerButton isOpen={isMenuOpen} onClick={handleMenuClick} theme='dark' />
            </div>

        </header>



        <nav className={`${styles.nav}`}>
            {/* TILE */}
            <div className={`body-2xl ${styles.tile} ${styles.work} ${styles.tileHover}`}
            style={{
                opacity: `${isMenuOpen ? '1' : '0'}`,
                transitionDelay: `${delayDurations[2]}ms`
                }}>
            <h2 className={`body-3xl `}>Product</h2>
            </div>
                    

            {/* TILE */}
            <div className={`${styles.tile} ${styles.experimental} ${styles.tileHover}`}
                style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[3]}ms`
            }}>
                <h2 className={`body-3xl `}>Motion & 3D</h2>
            </div>

            {/* TILE */}
            <div className={`${styles.tile} ${styles.info} ${styles.tileHover}`}
                style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[4]}ms`
            }}>
                <h2 className={`body-3xl `}>Dev</h2>
            </div>

            {/* TILE */}
            <div className={`${styles.tile} ${styles.office} ${styles.tileHover}`}
            style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[5]}ms`
            }}>
                <h2 className={`body-3xl `}>Info</h2>
            </div>

            {/* TILE */}
            <div className={`${styles.tile} ${styles.contact} ${styles.tileHover}`}
            style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[6]}ms`
            }}>
                <h2 className={`body-3xl `}>Contact</h2>
            </div>

        </nav>

        <div className={`${styles.footer}`}>

            {/* TILE */}
            <div className={`${styles.tile} ${styles.tileFooter}   ${styles.tileHover}`}
            style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[7]}ms`
            }}>
                <span className={`body-xl`}>©2023</span>
                <ul className={`body-xl ${styles.socialLinks}`}>
                    <li><Link href="https://github.com/hanhanxue" rel="noopener noreferrer" target="_blank">GitHub</Link></li>
                    <li><Link href="https://www.instagram.com/_hanhanxue_/" rel="noopener noreferrer" target="_blank">Instagram</Link></li>
                    <li><Link href="https://twitter.com/_hanhanxue_" rel="noopener noreferrer" target="_blank">X</Link></li>
                    <li><Link href="https://www.linkedin.com/in/hanhanxue/" rel="noopener noreferrer" target="_blank">LinkedIn</Link></li>
                </ul>
            </div>
        </div>
        <div className={`${styles.scrollableContainer}  `}>



        </div>






                </div>




        </div>

    )
}

export default Header


{/* <p>Han Han Xue is an interdiciplinary designer.</p>
  <p>Previously working on autonomous vehicles in San Francisco at Woven by Toyota and Lyft before that.</p>
  <p>He is currently working on Fragments, an immersive spatial experience in the digital realm.</p>             
   */}