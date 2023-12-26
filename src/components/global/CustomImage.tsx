'use client'
// import {image} from '@/types/global'
import Image from 'next/image'

import { useInView } from 'react-intersection-observer'

import styles from './CustomImage.module.scss'
import { useEffect } from 'react'



// Define the props interface
interface CustomImageProps {
    src: string;
    title: string;
    aspect: number;
    altText: boolean;
  }
  
  const CustomImage: React.FC<CustomImageProps> = ({ src, title, aspect, altText=true }) => {
    
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })


    // useEffect(() => {
    //     // WHY IS THIS RERENDERING?!?!?!?
    //     // console.log({inView})
    // }, [inView])

    return (

        <div className={`${styles.imageFrame}`}
        style={{paddingTop: `${1 / aspect * 100}%`}}>
    
    <Image
        className={`${styles.nextImage}`}
        alt={altText ? `product designer han han xue ${title} design` : ''}

        src={src} 
        fill={true}
        draggable={false}   
        // width={img.imgSize.width}
        // height={img.imgSize.height}

        style={{
            transform: inView ? `translateY(0px)` : `translateY(50px)`,
            opacity: inView ? 1 : 0,
            transition: 'opacity 1s ease, transform 1.5s ease',
        }}
        />
    
        <div ref={ref} data-img-to-show="" ></div>
        </div>


    )
}

export default CustomImage


//translate vs transform translate

