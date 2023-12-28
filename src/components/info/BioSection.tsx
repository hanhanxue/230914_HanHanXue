import styles from './BioSection.module.scss'

const BioSection = () => {


    return (
        <section className={`${styles.section}`}>
        <div className={`${styles.container}`}>

        <div className={`${styles.sectionGrid}`}> 
            <p className={`body-2xl ${styles.bio}`}>Han Han Xue designs and develops digital products for deep tech startups. Currently working on simulation software for heavy industries.</p>

            <ul className={`body-xl ${styles.subBio}`}>
                <li>Born in Shenzhen, China</li>
                {/* <li>Raised in Montreal, Canada</li> */}
                <li>Studied Architecture in Montreal, Canada</li>
                <li>Lives & Works in New York, USA</li>
            </ul>
        </div>


        </div>
        </section>
    )


}


export default BioSection