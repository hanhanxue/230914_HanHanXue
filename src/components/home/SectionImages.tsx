
import {parseImagesIndex} from '@/lib/serverUtils'



import Image from 'next/image'
import {image} from '@/types/global'

import styles from './SectionImages.module.scss'

const SectionImages = () => {

    
    // const images = getImages()
    const images = parseImagesIndex('public/images/home')


    return (
        

            <section className={``}>

                <div className={`${styles.container}`}>
    

                    {images.map((img: image, index: number) => {
                    // console.log(img)

                    return                     (

                                            
                        <div className={`${styles.imageFrame}`}
                        key={index}
                        style={{paddingTop: `${1 / img.aspectRatio * 100}%`}}>
                        {/* <DownloadButton></DownloadButton> */}

                        <Image
                            className={`${styles.nextImage}`}
                            alt={`han han xue product designer ${img.title} design`}

                            src={`/${img.pathRel}`} 
                            fill={true}
                            draggable={false}   
                            // width={img.imgSize.width}
                            // height={img.imgSize.height}
                            />

                        </div>
                            

                    )
                                        }
                    

                    
                    )}



                </div>

            </section>

    )
}

export default SectionImages