import styles from './WorkExperienceSection.module.scss'

const WorkExperienceSection = () => {

    return (
        <section className={`${styles.section}`}>
        <div className={`${styles.container}`}>

            <div className={`${styles.rowFrame}`}>
                <div className={`body-xl ${styles.row}`}>
                    <span className={`${styles.rowItem} ${styles.position}`}>Principal Product Designer</span>
                    <span className={`${styles.rowItem} ${styles.company}`}>PhysicsX</span>
                    <span className={`${styles.rowItem} ${styles.location}`}>New York, USA</span>
                    <span className={`${styles.rowItem} ${styles.tenure}`}>Jan 2024 — Present</span>
                </div>
            </div>

            <div className={`${styles.rowFrame}`}>
                <div className={`body-xl ${styles.row}`}>
                    <span className={`${styles.rowItem} ${styles.position}`}>Senior Product Designer</span>
                    <span className={`${styles.rowItem} ${styles.company}`}>Woven by Toyota</span>
                    <span className={`${styles.rowItem} ${styles.location}`}>San Francisco, USA</span>
                    <span className={`${styles.rowItem} ${styles.tenure}`}>Aug 2021 — May 2023</span>
                </div>
            </div>

            <div className={`${styles.rowFrame}`}>
                <div className={`body-xl ${styles.row}`}>
                    <span className={`${styles.rowItem} ${styles.position}`}>Product Designer</span>
                    <span className={`${styles.rowItem} ${styles.company}`}>Lyft</span>
                    <span className={`${styles.rowItem} ${styles.location}`}>San Francisco, USA</span>
                    <span className={`${styles.rowItem} ${styles.tenure}`}>Nov 2017 — Jul 2021</span>
                </div>
            </div>

            <div className={`${styles.rowFrame}`}>
                <div className={`body-xl ${styles.row}`}>
                    <span className={`${styles.rowItem} ${styles.position}`}>FX Technical Director</span>
                    <span className={`${styles.rowItem} ${styles.company}`}>Framestore</span>
                    <span className={`${styles.rowItem} ${styles.location}`}>Montreal, Canada</span>
                    <span className={`${styles.rowItem} ${styles.tenure}`}>May 2016 — Oct 2017</span>
                </div>
            </div>

            <div className={`${styles.rowFrame}`}>
                <div className={`body-xl ${styles.row}`}>
                    <span className={`${styles.rowItem} ${styles.position}`}>3D Generalist</span>
                    <span className={`${styles.rowItem} ${styles.company}`}>Moment Factory</span>
                    <span className={`${styles.rowItem} ${styles.location}`}>Montreal, Canada</span>
                    <span className={`${styles.rowItem} ${styles.tenure}`}>Nov 2014 — Feb 2016</span>
                </div>
            </div>

            <div className={`${styles.rowFrame}`}>
                <div className={`body-xl ${styles.row}`}>
                    <span className={`${styles.rowItem} ${styles.position}`}>Intern Architect</span>
                    <span className={`${styles.rowItem} ${styles.company}`}>MAD Architects</span>
                    <span className={`${styles.rowItem} ${styles.location}`}>Beijing, China</span>
                    <span className={`${styles.rowItem} ${styles.tenure}`}>May 2012 — Aug 2012</span>
                </div>
            </div>

        </div>
        </section>

    )
}

export default WorkExperienceSection