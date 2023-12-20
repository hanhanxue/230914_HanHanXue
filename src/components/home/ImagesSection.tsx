
import {parseImagesIndex} from '@/lib/serverUtils'



import {image} from '@/types/global'
import Image from 'next/image'


import styles from './ImagesSection.module.scss'

const ImagesSection = () => {

    
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
        alt={`product designer han han xue ${img.title} design`}

        src={`/${img.pathRel}`} 
        fill={true}
        draggable={false}   
        // width={img.imgSize.width}
        // height={img.imgSize.height}
        />

    </div>
        

)}
)}
</div>


            </section>

    )
}

export default ImagesSection






