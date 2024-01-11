import styles from './BioSection.module.scss'

const BioSection = () => {


    return (
        <section className={`${styles.section}`}>
        <div className={`${styles.container}`}>

        <div className={`${styles.sectionGrid}`}> 

                <div className={`body-xl ${styles.sectionTitle}`}>
                    <h2>Bio</h2>
                </div>

                <div className={`${styles.bioFrame}`}>
                    <p className={`body-2xl ${styles.bio}`}>Han Han Xue designs and develops digital products for deep tech<sup className={`body-xl `}>1</sup> startups.</p>
                    <p className={`body-2xl ${styles.bio}`}>Previously working on developer tooling for autonomous vehicles at Lyft and Woven by Toyota, he currently works on simulation software tailored for aerospace and other heavy industries<sup className={`body-xl`}>2</sup>.</p>

                    <ul className={`body-xl ${styles.sub}`}>
                        {/* <li>Born in Shenzhen, China</li> */}
                        {/* <li>Raised in Montreal, Canada</li> */}
                        <li>From Montreal, Canada</li>
                        <li>Living & Working Internationally</li>
                    </ul>

                    <ol className={`body-xs ${styles.footnote}`}>
                        {/* <li>Born in Shenzhen, China</li> */}
                        {/* <li>Raised in Montreal, Canada</li> */}
                        <li>Deep tech refers to startups whose business model is based on high tech innovation in engineering, or significant scientific advances.</li>
                        <li>Heavy industry is an industry that involves one or more characteristics such as large and heavy products, large and heavy equipment and facilities, or complex or numerous processes.</li>
                    </ol>

                </div>

        </div>


        </div>
        </section>
    )


}


export default BioSection