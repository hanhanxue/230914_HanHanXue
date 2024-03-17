
import type {IImage} from '@/models/Images'
import styles from './ImageContainer.module.scss'
import Image from 'next/image'


interface Props {
  image: IImage
}

export default function ImageContainer({image} : Props) {

  return (

    <div className={`${styles.container}`}
    // style={{width: image.maxWidth, height: image.maxHeight}}
    style={{width: image.maxWidth, height: image.maxHeight}}
    >
        
      <Image
      src={image.src}
      // width={image.maxWidth}
      // height={image.maxHeight}

    fill={true}
      alt={image.alt}
       />
    </div>
  )
}


