

import styles from './Video_Section.module.scss'



export default function Video_Section() {
  return (
    <section  className={`${styles.section} framey-sm`}>
    
    <div className={`${styles.container} framex `}>
    <video autoPlay muted loop className={`${styles.video}  `}>         
            {/* <source src="/assets/videos/supermanifold_breadboard_v2.mp4" type="video/mp4"/>          */}
    <source src="/content/information/supermanifold_breadboard_v2.mp4" type="video/mp4"/>  
    </video>



    </div>

    </section>
  )
}



// Copenhagen based image making studio. Informed by a background in graphic design and contemporary cinematography, Kühl & Han aim to find beauty in the everyday. Exploring light and surfaces in new and unexpected ways, our studio operates at the convergence of lifestyle, fashion and technology. Selected clients include Google, Salomon, ASICS, Muuto, Reform, Arc’teryx, IKEA, HAY, Veloretti, Toteme, Bang & Olufsen, WWF, Ace & Tate, Allbirds, Veark, Wood Wood, Moncler, Nike, Jordan, H&M , SPACE10, RAINS and Norse Projects.