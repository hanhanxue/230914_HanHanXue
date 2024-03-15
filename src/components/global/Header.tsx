
import styles from './Header.module.scss'

import Link from 'next/link'

import SuperManifoldLogo from './SuperManifoldLogo'


const Header = () => {
    return (
        
            <header  className={`${styles.section}`}>
    
            <div className={`${styles.container} framex body`}>

                <div className={`${styles.gridItem}`}>
                <Link className={`  `} href={`/`} rel="noopener noreferrer" target="_blank">
                <SuperManifoldLogo />
                </Link>
                <Link className={`  `} href={`/`} rel="noopener noreferrer" target="_blank">
                    <span>Han Han Xue — Product Designer</span>
                </Link>

                </div>

                <nav className={`${styles.gridItem}`}>
                    <div className={`${styles.flex}`}>
                        <Link className={`  `} href={`/`} rel="noopener noreferrer" target="_blank">
                        <span>WIP</span>
                        </Link>
                        <Link className={`  `} href={`/`} rel="noopener noreferrer" target="_blank">
                            <span>Projects</span>
                        </Link>
                    </div>


                <Link className={`  `} href={`/`} rel="noopener noreferrer" target="_blank">
                    <span>Information</span>
                </Link>
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