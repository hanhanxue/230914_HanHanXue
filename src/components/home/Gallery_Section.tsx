import parseImagesIndex from '@/lib/parseImagesIndex'
import styles from './Gallery_Section.module.scss'
import ImageContainer from './ImageContainer'

import path from 'path'

import type {IImage} from '@/models/Images'

export default async function Gallery_Section() {

const images = await parseImagesIndex(path.join(process.cwd(), 'public', 'content/wip/_index.json'))

// console.log(images)

  return (
    <section  className={`${styles.section} framey`} id="wip">

      <div className={`${styles.container} framex`}>


        {images.map((i : IImage, index : number) => (

            <ImageContainer key={index} image={i} />
        ))}

      </div>

        </section>
  )
}
