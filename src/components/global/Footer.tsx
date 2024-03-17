

import Link from 'next/link'


import styles from './Footer.module.scss'
import FooterClock from './FooterClock'

const Footer = () => {

    



    return (
        <footer  className={`${styles.section}`}>
    
        <div className={`${styles.container} framex body`}>

            <div className={`${styles.gridItem}`}>
                <span>{`©${new Date().getFullYear()}`}</span>
            </div>

            <div className={`${styles.gridItem}`}>
        
                {/* <span className={`body`} >{`Montréal モントリオール `}<span ref={currentTimeRef} /></span> */}
                <div className={styles.time} >
                <span >{`Montréal`}</span>
                <FooterClock />
                </div>


                <ul className={`${styles.social}`}>
                <li><Link href="https://github.com/hanhanxue" rel="noopener noreferrer" target="_blank">GitHub</Link></li>
                <li><Link href="https://www.instagram.com/_hanhanxue_/" rel="noopener noreferrer" target="_blank">Instagram</Link></li>
                <li><Link href="https://twitter.com/_hanhanxue_" rel="noopener noreferrer" target="_blank">X</Link></li>
                <li><Link href="https://www.linkedin.com/in/hanhanxue/" rel="noopener noreferrer" target="_blank">LinkedIn</Link></li>
                </ul>
            </div>

           
        </div>


        </footer>

    )

}

export default Footer