
import styles from './Cover_Section.module.scss'

import Link from 'next/link'


const CoverSection = () => {
    return (
        
            <section  className={`${styles.section}`}>
    
            <div className={`${styles.container} framex`}>
                    <div className={`${styles.flex}`}>
                        <h1 className={`title3`}  >
                            <span>Principal Product Designer&nbsp;</span>
                            <span>at <Link className={`  `} href={`https://www.physicsx.ai/`} rel="noopener noreferrer" target="_blank"><u>PhysicsX</u>®</Link>&nbsp;</span>
                            <span>in London, UK</span>
                        </h1> 
                    </div>

            </div>

            </section>
    )
}


export default CoverSection







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