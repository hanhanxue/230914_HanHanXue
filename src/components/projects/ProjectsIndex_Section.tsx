
import styles from './ProjectsIndex_Section.module.scss'

import Link from 'next/link'


const ProjectsIndex_Section = () => {
    return (
        
            <section  className={`${styles.section} framey`}>
    
            <div className={`${styles.container} framex`}>

                <Link className={`${styles.gridItem_2_1}`} href={'projects/archive'}>
                <div className={`${styles.gridItem_2_1}`}></div>
                </Link>

                <div className={`${styles.gridItem_1_1}`}></div>
                <div className={`${styles.gridItem_1_1}`}></div>

                <div className={`${styles.gridItem_2_1}`}></div>

                <div className={`${styles.gridItem_1_2}`}></div>
                <div className={`${styles.gridItem_1_1}`}></div>
                <div className={`${styles.gridItem_1_1}`}></div>

                

                <div className={`${styles.gridItem_1_2}`}></div>
                <div className={`${styles.gridItem_1_1}`}></div>


            </div>

            </section>
    )
}


export default ProjectsIndex_Section


