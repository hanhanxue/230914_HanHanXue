import styles from './BioSection.module.scss'

const BioSection = () => {


    return (
        <section className={`${styles.section}`}>
        <div className={`${styles.container}`}>

        <div className={`${styles.sectionGrid}`}> 
                <div className={`${styles.bioFrame}`}>
                <p className={`body-2xl ${styles.bio}`}>Han Han Xue designs and develops digital products for deep tech startups.</p>
                <p className={`body-2xl ${styles.bio}`}>Previously working on developer tooling for autonomous vehicles at Lyft and Woven by Toyota, he currently works on simulation software tailored for aerospace and other heavy industries.</p>

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