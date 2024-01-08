import styles from './BioSection.module.scss'

const BioSection = () => {


    return (
        <section className={`${styles.section}`}>
        <div className={`${styles.container}`}>

        <div className={`${styles.sectionGrid}`}> 
                <div className={`${styles.bioFrame}`}>
                <p className={`body-2xl ${styles.bio}`}>Han Han Xue designs and develops digital products for deep tech startups. He currently works on simulation software for heavy industries.</p>

                <ul className={`body-xl ${styles.sub}`}>
                    {/* <li>Born in Shenzhen, China</li> */}
                    {/* <li>Raised in Montreal, Canada</li> */}
                    <li>From Montreal, Canada</li>
                    <li>Living & Working Internationally</li>
                </ul>

                </div>

        </div>


        </div>
        </section>
    )


}


export default BioSection