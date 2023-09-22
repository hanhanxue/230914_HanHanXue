

import Link from 'next/link'
import Image from 'next/image'




import {parseImagesIndex} from '@/lib/serverUtils'



import ContactButton from '@/components/home/ContactButton'
import DownloadButton from '@/components/home/DownloadButton'


import styles from './Home.module.scss'

import {image} from '@/types/global'




const Home = ({  }) => {


    // const images = getImages()
    const images = parseImagesIndex()


    return (
      <>

        <main>


            {/* COVER SECTION */}
            <section  className={`${styles.sectionCover}`}>
    
            <div className={`${styles.container}`}>

            <div  className={`${styles.thirds}`}>
                <div className={`${styles.buttonFrame}`}>
        
                    <ContactButton></ContactButton>
                </div>

            </div>



            <div  className={`${styles.thirds}`}>
                <div  className={`${styles.titleFrame}`}>
                    <h1 className={`  body-xl  ${styles.title} `}  >
                        <span>Design & Product at&nbsp;</span>

                        <Link className={`  `} href={`https://www.supermanifold.com/`} rel="noopener noreferrer" target="_blank">
                            <span><u>Super Manifold</u>®&nbsp;</span>
                        </Link>

                        <span>in Montreal, Canada.</span>
                        </h1>   

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


                    {images.map((img: image, index: number) => (
                        <div className={`${styles.imageFrame}`}
                        key={index}>
                            {/* <DownloadButton></DownloadButton> */}
                    <Image
                    className={`${styles.nextImage}`}
                        src={`/images/${img.imgName}`} 

                        width={img.imgSize.width}
                        height={img.imgSize.height}

                        alt={`han han xue design & product`}
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
  
  

