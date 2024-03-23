'use client'

import styles from './Header.module.scss'

import Link from 'next/link'

import SuperManifoldLogo from './SuperManifoldLogo'
import MenuIcon from './MenuButton'
import { useEffect, useLayoutEffect, useState } from 'react'




const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuOpen = () => {
        setIsMenuOpen((current) => !current)
    }
    
    useEffect(() => {
        if(isMenuOpen) {
            document.body.classList.add("isMenuOpen")
        } else {
            document.body.classList.remove("isMenuOpen")
        }
    }, [isMenuOpen])

    return (
        
            <header  className={`
            ${styles.section}
            ${isMenuOpen ? styles.isMenuOpen : ''}
            `}>
    
            <div className={`
            ${styles.container} 

            framex body`}>


                {/* Logo lockup */}
                <div className={`
                ${styles.gridItem} 
                ${styles.identity}
                `}>
                    <Link className={`${styles.logo}`} href={`/`} ><SuperManifoldLogo /></Link>
                    <Link className={`${styles.mark}`} href={`/`} >
             
                        <span className={`${styles.name}`}>Han Han Xue</span>
                        <span className={`${styles.tagline}`}> — Product Designer</span>
        
                    </Link>
                </div>


                {/* Menu icon */}
                <div className={`${styles.menuIcon}`} >
                <MenuIcon isOpen={isMenuOpen} onClick={handleMenuOpen}/>
                </div>



                {/* Navigation */}
                <nav className={`
                ${styles.gridItem} 
                ${styles.nav}
                `}>
                    <ul className={`${styles.mainLinks}`}>
                        {/* <li><Link className={`  `} href={`#wip`} ><span>WIP</span></Link></li> */}
                        {/* <li><span onClick={() => {scrollToId('wip')}}>WIP</span></li> */}
                        {/* <li><ScrollToElement elementId='wip'><span>WIP</span></ScrollToElement></li> */}
                        <li><Link className={`  `} href={`/#wip`} onClick={handleMenuOpen}><span>WIP</span></Link></li>
                        <li><Link className={`  `} href={`/projects`} onClick={handleMenuOpen} ><span>Projects</span></Link></li>
                    </ul>

                    <Link className={`  `} href={`/information`} onClick={handleMenuOpen} ><span>Information</span></Link>
                    </nav>





            </div>






            </header>
    )
}


export default Header







// <div  className={`${styles.thirds}`}>
// <div  className={`${styles.titleFrame}`}>
  

//     {/* <span className={`  body-xl `}  >Previously at</span>
//     Woven by Toyota in San Francisco, California. */}

// </div>

// </div>



// <div  className={`${styles.thirds}`}>
// <div className={`${styles.scrollArrowFrame}`}>
//         {/* <h2  className={`  body-xl   `}  style={textPad} >{moment().format('YYYY')}</h2> */}

//         <svg width="28" height="48" viewBox="0 0 28 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M14 4V44" stroke="black" strokeWidth="2"/>
//         <path d="M4 34L14 44L24 34" stroke="black" strokeWidth="2"/>
//         </svg>

// </div>

// </div>




//             {/* <div  className={`${styles.thirds}`}>
//                 <div className={`${styles.buttonFrame}`}>
//                     <ContactButton></ContactButton>
//                 </div>

//             </div> */}



//             </div>