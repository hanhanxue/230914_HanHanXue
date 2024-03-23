import styles from './Contact_Section.module.scss'


export default function Contact_Section() {
  return (
    <section  className={`${styles.section} framey`}>
    
    <div className={`${styles.container} framex `}>
      <h2 className={`${styles.sectionHeader} body`}>
        Contact
      </h2>






      <div className={`${styles.sectionContent}`}>


        <div className={`${styles.contentList} title3`}>
            <h3 className={`${styles.contentListHeader} `}>Email</h3>
            <ul>
                <li>
                hello@hanhanxue.com
            </li>
                </ul>
        </div>

        <div className={`${styles.contentList} title3`}>
<h3 className={`${styles.contentListHeader} `}>Social</h3>
<ul>
    <li>
    GitHub
</li>
<li>
    Instagram
</li>
<li>
    X
</li>
<li>
    LinkedIn
</li>
<li>
    Are.na
</li>
    </ul>
        </div>
        </div>




    </div>

    </section>
  )
}
