



import Link from 'next/link'
import Image from 'next/image'




import {getImages} from '@/lib/serverUtils'


import styles from './Home.module.scss'

import ContactButton from '@/components/Home/ContactButton'


const Home = ({  }) => {




    const images = getImages()


    return (
      <>

        <main>


            {/* COVER SECTION */}
            <section  className={`${styles.sectionCover}`}>
    
            <div className={`${styles.container}`}>

            <div  className={`${styles.thirds}`}>
                <div className={`${styles.buttonFrame}`}>
        
                    <ContactButton/>
                </div>

            </div>



            <div  className={`${styles.thirds}`}>
                <div  className={`${styles.titleFrame}`}>
                    <h1 className={`  body-xl  ${styles.title} `}  >Design & Product at <Link className={`  `} href={`https://www.supermanifold.com/`}>
                    <u>Super Manifold</u>®
                    </Link> in Montreal, Canada.</h1>   

                    {/* <span className={`  body-xl `}  >Previously at</span>
                    Woven by Toyota in San Francisco, California. */}
  
                </div>

            </div>



            <div  className={`${styles.thirds}`}>
                <div className={`${styles.scrollArrowFrame}`}>
                        {/* <h2  className={`  body-xl   `}  style={textPad} >{moment().format('YYYY')}</h2> */}
                        <svg className={`${styles.scrollArrowIcon}`} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4V44" stroke="black" strokeWidth="2"/>
                        <path d="M14 34L24 44L34 34" stroke="black" strokeWidth="2"/>
                        </svg>

                </div>

            </div>

            </div>



            </section>

            {/* IMAGES SECTION */}
            <section className={`${styles.sectionWorks}`}>

                <div className={`${styles.container}`}>


                    {images.map((img, index) => (
                        <div className={`${styles.imageFrame}`}
                        key={index}>
                            <button className={`${styles.downloadButton}`}>
                            <span className={`${styles.downloadButtonIconMask}`}></span>
                            
                            {/* <span className={`body-base   ${styles.downloadButtonLabel}`}>Project Files</span> */}
                            {/* <svg className={`${styles.downloadButtonIcon}`}
                            width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M22 6H10V16H4L16 28L28 16H22V6Z"/>
                            </svg> */}

                            
                            </button>
                                                <Image
                    className={`${styles.nextImage}`}
                        src={`/images/${img.imgName}`} 

                        width={img.imgSize.width}
                        height={img.imgSize.height}

                        alt={`hanhanxue designer`}
                    />
                            </div>





                    ))}



                </div>

            </section>
        </main>


        </>
    )
  }
  
  export default Home
  
  

