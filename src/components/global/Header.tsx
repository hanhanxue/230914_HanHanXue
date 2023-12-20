

'use client'


import {useState, useEffect} from 'react'

import {fit, fit01} from '@/lib/clientUtils'
import useFirstRender from '@/lib/useFirstRender'

import Link from 'next/link'
import {useRouter} from 'next/navigation'


import BurgerButton from '@/components/global/BurgerButton'
import LogoButton from '@/components/global/LogoButton'

import styles from './Header.module.scss'



interface BottomFragmentProps {
    isMenuOpen: boolean;
    delayDuration: number;
  }

export const BottomFragment: React.FC<BottomFragmentProps> = ({isMenuOpen, delayDuration}) => {

    return (
    <div className={`${styles.navBottom}`}>


        {/* TILE */}
        <div className={`${styles.tile} ${styles.tileHover} ${styles.tileNavBottom}   `}
        style={{
        opacity: `${isMenuOpen ? '1' : '0'}`,
        transitionDelay: `${delayDuration}ms`
        }}>
            <span className={`body-xl`}>©2023</span>
            <ul className={`body-xl ${styles.socialLinks}`}>
                <li><Link href="https://github.com/hanhanxue" rel="noopener noreferrer" target="_blank">GitHub</Link></li>
                <li><Link href="https://www.instagram.com/_hanhanxue_/" rel="noopener noreferrer" target="_blank">Instagram</Link></li>
                <li><Link href="https://www.linkedin.com/in/hanhanxue/" rel="noopener noreferrer" target="_blank">LinkedIn</Link></li>
            </ul>
        </div>


    </div>
    )

}





const Header = () => {

    const router = useRouter()

    const maxDelayDuration = 350
    // const firstRender = useFirstRender()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // const [emojiIndexOffset, setEmojiIndexOffset] = useState(fit01(Math.random(), 999, 1999))

    const [isScrollInit, setIsScrollInit] = useState(1)  // Always on

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

    const handleMenuClose = () => {
        setIsMenuOpen((current) => !current)
        setDelayDurations(generateDelayDurations(10))
    }
    


    // useEffect(() => {
    //     const handleScroll = () => {

    //         if(isScrollInit) return;
    //         if(window.scrollY > 1) setIsScrollInit(1)
    //     }
    
    //     handleScroll()

    //     window.addEventListener('scroll', handleScroll)
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, [])




    useEffect(() => {
        const timeout = setTimeout(() => {
            setDelayDurations(new Array(10).fill(0))
        }, maxDelayDuration)
        return () => clearTimeout(timeout)
    }, [isMenuOpen])

    

    return (
        <header className={`${styles.container}`}
        style={{
            opacity: `${isScrollInit ? '1' : '0'}`,

            
            }}>



        <header className={`${styles.headerDefault}`} >
            <div className={`${styles.tile} ${styles.tileLogo}`}  >
                {/* <LogoButton /> */}
            </div>

            <div className={`${styles.tile} ${styles.tileBurger}`}  >
                <div style={{pointerEvents: `${isScrollInit ? 'all' : 'none'}`}}>

                <BurgerButton isOpen={isMenuOpen} onClick={handleMenuClose}/>
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

                <BurgerButton isOpen={isMenuOpen} onClick={handleMenuClose} theme='dark'/>
            </div>

        </header>



        <nav className={`${styles.nav}`}>
            {/* TILE */}

            <div className={`body-2xl ${styles.tile} ${styles.one} ${styles.tileHover}`}
            style={{
                opacity: `${isMenuOpen ? '1' : '0'}`,
                transitionDelay: `${delayDurations[2]}ms`
                }}> 

                <div className={`${styles.linkTile}`} 
                onClick={() => {
                    router.push('/')
                    handleMenuClose()}}>
                {/* rel="noopener noreferrer" target="_blank">    */}
                <h2 className={`body-3xl `}>Objects</h2>         
                </div> 

            </div>


            {/* TILE */}
            <div className={`${styles.tile} ${styles.two} ${styles.tileHover}`}
                style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[3]}ms`
            }}>

                <div className={`${styles.linkTile}`} 
                onClick={() => {
                    router.push('/interfaces')
                    handleMenuClose()}}>
                <h2 className={`body-3xl `}>Interfaces</h2>
                </div>

            </div>



            {/* TILE */}
            <div className={`${styles.tile} ${styles.three} ${styles.tileHover}`}
                style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[4]}ms`
            }}>

                <div className={`${styles.linkTile}`} 
                onClick={() => {
                    router.push('/prototypes')
                    handleMenuClose()}}>
                <h2 className={`body-3xl `}>Prototypes</h2>
                </div>

            </div>

            {/* TILE */}
            <div className={`${styles.tile} ${styles.four} ${styles.tileHover}`}
            style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[5]}ms`
            }}>

                <div className={`${styles.linkTile}`} 
                onClick={() => {
                    router.push('/info')
                    handleMenuClose()}}>
                <h2 className={`body-3xl `}>Info</h2>
                </div>

            </div>

            {/* TILE */}
  
            <div className={`${styles.tile} ${styles.five} ${styles.tileHover}`}
            style={{
            opacity: `${isMenuOpen ? '1' : '0'}`,
            transitionDelay: `${delayDurations[6]}ms`
            }}>

                <div className={`${styles.linkTile}`} 
                onClick={() => {
                    router.push('/contact')
                    handleMenuClose()}}>
                <h2 className={`body-3xl `}>Contact</h2>
                </div>

            </div>
    

        </nav>


        <BottomFragment 
        isMenuOpen={isMenuOpen} 
        delayDuration={delayDurations[7]} />


        </div>

        </header>

    )
}

export default Header









{/* <p>Han Han Xue is an interdiciplinary designer.</p>
  <p>Previously working on autonomous vehicles in San Francisco at Woven by Toyota and Lyft before that.</p>
  <p>He is currently working on Fragments, an immersive spatial experience in the digital realm.</p>             
   */}