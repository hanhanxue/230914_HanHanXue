
import styles from './Header.module.scss'

import Link from 'next/link'

import SuperManifoldLogo from './SuperManifoldLogo'
import ScrollToElement from '../home/ScrollToElement'



const Header = () => {


    
    return (
        
            <header  className={`${styles.section}`}>
    
            <div className={`${styles.container} framex body`}>

                <div className={`${styles.gridItem}`}>
                <Link className={`  `} href={`/`} ><SuperManifoldLogo /></Link>
                <Link className={`  `} href={`/`} ><span>Han Han Xue — Product Designer</span></Link>

                </div>

                <nav className={`${styles.gridItem}`}>
                    <ul className={`${styles.flex}`}>
                        {/* <li><Link className={`  `} href={`#wip`} ><span>WIP</span></Link></li> */}
                        {/* <li><span onClick={() => {scrollToId('wip')}}>WIP</span></li> */}
                        <li><ScrollToElement elementId='wip'><span>WIP</span></ScrollToElement></li>
                        <li><Link className={`  `} href={`/`} ><span>Projects</span></Link></li>
                    </ul>


                <Link className={`  `} href={`/`} ><span>Information</span></Link>
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