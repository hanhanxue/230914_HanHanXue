import styles from './WorkExperienceSection.module.scss'


interface RowItemProps {
tenure: string
position: string
company: string
location: string
  }

const RowItem: React.FC<RowItemProps> = ({tenure, position, company, location}) => {
    return (
        <li className={`${styles.rowFrame}`}>
        <div className={`body-xl ${styles.row}`}>
            <span className={`body-xl-mono ${styles.rowItem} ${styles.tenure}`}>{tenure}</span>
            <span className={`${styles.rowItem} ${styles.position}`}>{position}</span>
            <span className={`${styles.rowItem} ${styles.company}`}>{company}</span>
            <span className={`${styles.rowItem} ${styles.location}`}>{location}</span>
        </div>
    </li>
    )
}

const WorkExperienceSection = () => {

    return (
        <section className={`${styles.section}`}>
        <div className={`${styles.container}`}>

            <div className={`${styles.sectionGrid}`}>

            <div className={`body-xl ${styles.sectionTitle}`}>
                    <h2>Experience</h2>
                </div>
        <ul className={`${styles.list}`}>
            <RowItem tenure='Jan 2024 — Present' position='Principal Product Designer' company='PhysicsX' location='London, UK' />
            <RowItem tenure='Aug 2021 — May 2023' position='Senior Product Designer' company='Woven by Toyota' location='San Francisco, USA' />
            <RowItem tenure='Nov 2017 — Jul 2021' position='Product Designer' company='Lyft' location='San Francisco, USA' />
            <RowItem tenure='May 2016 — Oct 2017' position='FX Technical Director' company='Framestore' location='Montreal, Canada' />
            <RowItem tenure='Nov 2014 — Feb 2016' position='3D Generalist' company='Moment Factory' location='Montreal, Canada' />
            <RowItem tenure='May 2012 — Aug 2012' position='Intern Architect' company='MAD Architects' location='Beijing, China' />


        </ul>
     



            </div>


        </div>
        </section>

    )
}

export default WorkExperienceSection