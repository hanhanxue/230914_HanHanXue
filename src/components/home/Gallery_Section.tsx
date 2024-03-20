

import parseImagesIndex from '@/lib/parseImagesIndex'
import styles from './Gallery_Section.module.scss'
import path from 'path'


import JustifiedLayout from './JustifiedLayout'



export default async function Gallery_Section() {


const images = await parseImagesIndex(path.join(process.cwd(), 'public', 'content/wip/_index.json'))

const aspectRatios = images.map(image => image.aspectRatio)


// console.log(layoutGeometry)


// console.log(aspectRatios)

  return (
    <section  className={`${styles.section} framey`} id="wip">

      <div className={`${styles.container} framex`} >

      <JustifiedLayout images={images} aspectRatios={aspectRatios} />
      </div>

        </section>
  )
}
