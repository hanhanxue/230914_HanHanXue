import styles from './WorkExperience_Section.module.scss'

export default function WorkExperience_Section() {
  return (
    <section  className={`${styles.section} framey`}>
    
    <div className={`${styles.container} framex `}>
      <h2 className={`${styles.sectionTitle}`}>
        Work Experience
      </h2>

      <ul className={`${styles.table}`}>
        <ExperienceRow 
        title = 'Principal Product Designer' 
        company = 'PhysicsX' 
        location = 'London, UK' 
        dates = 'Jan 2024 — Present'
        />

<ExperienceRow 
        title = 'Senior Product Designer' 
        company = 'Woven by Toyota' 
        location = 'San Francisco, USA' 
        dates = 'Aug 2021 — May 2023'
        />

<ExperienceRow 
        title = 'Product Designer' 
        company = 'Lyft' 
        location = 'San Francisco, USA' 
        dates = 'Nov 2017 — Jul 2021'
        />

<ExperienceRow 
        title = 'FX Technical Director' 
        company = 'Framestore' 
        location = 'Montréal, Canada' 
        dates = 'May 2016 — Oct 2017'
        />

<ExperienceRow 
        title = '3D Generalist' 
        company = 'Moment Factory' 
        location = 'Montréal, Canada' 
        dates = 'Nov 2014 — Feb 2016'
        />

<ExperienceRow 
        title = 'Intern Architect' 
        company = 'Asymptote Architecture' 
        location = 'New York, USA' 
        dates = 'May 2013 — Aug 2013'
        />

<ExperienceRow 
        title = 'Intern Architect' 
        company = 'MAD Architects' 
        location = 'Beijing, China' 
        dates = 'May 2012 — Aug 2012'
        />



      </ul>
    </div>

    </section>
  )
}


interface IExperience {
  title: string,
  company: string,
  location: string,
  dates: string
}

const ExperienceRow = ({title, company, location, dates}: IExperience) => {

  return (
    <li className={`${styles.tableRow} title3`}>
    <span className={`${styles.dates} code `}>{dates}</span>
    <span className={`${styles.title} `}>{title}</span>
    <span className={`${styles.company} `}>{company}</span>
    <span className={`${styles.location} `}>{location}</span>
</li>

  )

  
}