

'use client'


import {useState, useEffect} from 'react'

import {fit, fit01} from '@/lib/clientUtils'
import useFirstRender from '@/lib/useFirstRender'


import BurgerButton from '@/components/global/BurgerButton'
import LogoButton from '@/components/global/LogoButton'

import styles from './Header.module.scss'

const Header = () => {

    const maxDelayDuration = 350
    const firstRender = useFirstRender()



    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrollTop, setIsScrollTop] = useState(1)

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

            if(window.scrollY>1) {setIsScrollTop(0)
                 return}
                setIsScrollTop(1)

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
            opacity: `${isScrollTop && !isMenuOpen ? '0' : '1'}`,
            pointerEvents: `${isScrollTop && !isMenuOpen ? 'none' : 'all'}`,
            }}>


        <header className={`${styles.headerDefault}`}>
            <div className={`${styles.tile} ${styles.tileLogo}`}>
                {/* <LogoButton /> */}
            </div>

            <div className={`${styles.tile} ${styles.tileBurger}`}>
                <BurgerButton isOpen={isMenuOpen} onClick={handleMenuClick}/>
            </div>
        </header>








            {/* OVERLAY */}
            <div className={`${styles.overlay}`}> 
            <header className={`${styles.header}`}>

            {/* TILE */}
            <div className={`${styles.tile} ${styles.tileLogo}`}
        style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[0]}ms`
            }}>
        
                {/* <LogoButton /> */}
            </div>

            {/* TILE */}    
            <div className={`${styles.tile} ${styles.tileBurger}`}
        style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[1]}ms`
            }}>

                <BurgerButton isOpen={isMenuOpen} onClick={handleMenuClick}/>
            </div>

        </header>






        <nav className={`${styles.nav}`}>
            {/* TILE */}
            <div className={`body-2xl ${styles.tile} ${styles.about}`}
            style={{
                opacity: `${isMenuOpen ? '1' : '0'}`,
                transitionDelay: `${delayDurations[2]}ms`
                }}>
            <h2 className={`body-3xl `}>Work</h2>
            </div>
                    

            {/* TILE */}
            <div className={`${styles.tile} ${styles.experimental}`}
                style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[3]}ms`
            }}>
                <h2 className={`body-3xl `}>Experimental</h2>
            </div>

            {/* TILE */}
            <div className={`${styles.tile} ${styles.resume}`}
                style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[4]}ms`
            }}>
                <h2 className={`body-3xl `}>Info</h2>
            </div>

            {/* TILE */}
            <div className={`${styles.tile} ${styles.chat}`}
            style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[5]}ms`
            }}>
                <h2 className={`body-3xl `}>Resume</h2>
            </div>

            {/* TILE */}
            <div className={`${styles.tile} ${styles.contact}`}
            style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[6]}ms`
            }}>
                <h2 className={`body-3xl `}>Contact</h2>
            </div>


        </nav>


        <div className={`${styles.footer}`}>

            {/* TILE */}
            <div className={`${styles.tile} ${styles.tileFooter}`}
            style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[7]}ms`
            }}>
                <span className={`body-xl`}>©2023</span>
                <ul className={`body-xl ${styles.socialLinks}`}>
                    <li>GitHub</li>
                    <li>Instagram</li>
                    <li>X</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
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