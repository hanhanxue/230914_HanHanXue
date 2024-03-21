

import parseImagesIndex from '@/lib/parseImagesIndex'
import styles from './Gallery_Section.module.scss'
import path from 'path'

import JustifiedLayout from './JustifiedLayout'
import type {IImage} from '@/models/Images'

interface Props {
  indexPath: string,
}


export default async function Gallery_Section({indexPath} : Props) {


const images = await parseImagesIndex(path.join(process.cwd(), 'public', indexPath, '_index.json'))

const aspectRatios = images.map((image : IImage) => image.aspectRatio)



  return (
    <section  className={`${styles.section} framey`} id="wip">

      <div className={`${styles.container} framex`} >

      <JustifiedLayout images={images} aspectRatios={aspectRatios}/>
      </div>

        </section>
  )
}
