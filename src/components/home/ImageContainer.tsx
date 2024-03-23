
import type {IImage} from '@/models/Images'
import styles from './ImageContainer.module.scss'
import Image from 'next/image'


interface IProp {
  image: IImage
}

export default function ImageContainer({image} : IProp) {

  return (
    <div className={`${styles.container}`}>

      <Image
      src={image.src}
      // width={image.maxWidth}
      // height={image.maxHeight}

      fill={true}
      alt={image.alt}
      unoptimized={image.unoptimized}
      />
      
    </div>

  )
}


