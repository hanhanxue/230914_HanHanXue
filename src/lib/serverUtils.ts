
const sizeOf = require('image-size')

import fs from 'fs'
import path from 'path'
import {cache} from 'react'


const parseImagesIndex = () => {
  const indexPath = path.join(process.cwd(), 'public', 'images', 'index.json');
  try {
    const jsonContent = fs.readFileSync(indexPath, 'utf-8');
    
    // Parse the JSON content into an object
    const images = JSON.parse(jsonContent);

    // Now, 'images' contains the parsed JSON data
    // console.log(images);

    return images

    // You can access individual properties of the 'images' object as needed
    // For example, if you want to access the first image's name:
    // console.log('First image name:', images[0].imgName);
} catch (error) {
    console.error('Error reading or parsing the index.json file:', error);
}
}






// const getImages = cache(  () => {
  

//     const root = process.cwd()

//     const dirPath = path.join(root, 'public', 'images')
//     // console.log(dirPath)
//     const dirFileObjs = fs.readdirSync(dirPath, {withFileTypes: true})

//     const images = dirFileObjs
//     .filter((fileObj) => {
//       // SKIP underscore
//       const reg_exp = /^_/gm
//       if(reg_exp.test(fileObj.name)) return false
//       return true
//     })
//     .map((fileObj) => {
   
//       // console.log(fileObj)


//       const imgName = fileObj.name
//       const imgPathAbs = path.join(fileObj.path, imgName)
//       const imgPathRel = path.join('images', imgName)
//       const imgSize = sizeOf(imgPathAbs)

//       const MAX_WIDTH = 960
//       const MAX_HEIGHT = 720

//       const aspectRatio = imgSize.width / imgSize.height

//       if(imgSize.width > MAX_WIDTH) {
//         imgSize.width = MAX_WIDTH
//         imgSize.height = imgSize.width / aspectRatio
//       }

//       if(imgSize.height > MAX_HEIGHT) {
//           imgSize.height = MAX_HEIGHT
//           imgSize.width = imgSize.height * aspectRatio
//       }

//     imgSize.width = Math.round(imgSize.width)
//     imgSize.height = Math.round(imgSize.height)

//       return {imgName, imgPathAbs, imgPathRel, imgSize}

//     })
  
         
//     // console.log(images)
//     return images.reverse()

//   })



export {parseImagesIndex}