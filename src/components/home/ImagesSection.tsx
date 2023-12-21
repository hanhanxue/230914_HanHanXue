

import {parseImagesIndex} from '@/lib/serverUtils'

import {image} from '@/types/global'


import CustomImage from '@/components/global/CustomImage'


import styles from './ImagesSection.module.scss'

const ImagesSection = () => {


    
    // const images = getImages()
    const images = parseImagesIndex('public/images/home')


    return (
        

    <section className={``}>

    <div className={`${styles.container}`}>


    {images.map((img: image, index: number) => {

    return (

        <CustomImage 
        src={`/${img.pathRel}`} 
        title={`${img.title}`} 
        aspect={img.aspectRatio} key={index}/>

    )}
    )}



    </div>


    </section>

    )
}

export default ImagesSection






