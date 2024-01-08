

import { BottomFragment } from '@/components/global/Header'
import styles from './Footer.module.scss'

const Footer = () => {


    return (
        <footer className={`${styles.footer}`}>
            <BottomFragment isMenuOpen={true} delayDuration={0}/>
        </footer>

    )

}

export default Footer