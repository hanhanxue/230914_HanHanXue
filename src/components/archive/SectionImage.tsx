
import {parseImagesIndex} from '@/lib/serverUtils'


import styles from './SectionImage.module.scss'

import {image} from '@/types/global'
import Image from 'next/image'





const SectionImage = () => {

    const images = parseImagesIndex('public/images/archive')


    return (
        <section className={`${styles.sectionWorks}`}>

        <div className={`${styles.container}`}>


            {images.map((img: image, index: number) => (
                <div className={`${styles.imageFrame}`}
                key={index}>
                    {/* <DownloadButton></DownloadButton> */}


                    <Image
                    className={`${styles.nextImage}`}
                    alt={img.imgTitle}
                        src={`/${img.imgPathRel}`} 

                        width={img.imgSize.width}
                        height={img.imgSize.height}
                        // fill={true}
                        // draggable={false}

                    />


                    </div>

            ))}



        </div>

    </section>
    )
}

export default SectionImage