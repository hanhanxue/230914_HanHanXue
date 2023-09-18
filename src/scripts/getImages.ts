
const sizeOf = require('image-size')
import fs from 'fs'
import path from 'path'



const getImages = () => {
  


    const root = process.cwd()
    
    const dirPath = path.join(root, 'public', 'images')
    const fullFilePath = path.join(root, 'public', 'images', '_index.json')

    // console.log(dirPath)
    const dirFileObjs = fs.readdirSync(dirPath, {withFileTypes: true})

    const images = dirFileObjs
    .filter((fileObj) => {
      // SKIP underscore
      const reg_exp = /^_/gm
      if(reg_exp.test(fileObj.name)) return false
      return true
    })
    .map((fileObj) => {
   
      // console.log(fileObj)


      const imgName = fileObj.name
      const imgPathAbs = path.join(fileObj.path, imgName)
      const imgPathRel = path.join('images', imgName)
      const imgSize = sizeOf(imgPathAbs)

      const MAX_WIDTH = 960
      const MAX_HEIGHT = 720

      const aspectRatio = imgSize.width / imgSize.height

      if(imgSize.width > MAX_WIDTH) {
        imgSize.width = MAX_WIDTH
        imgSize.height = imgSize.width / aspectRatio
      }

      if(imgSize.height > MAX_HEIGHT) {
          imgSize.height = MAX_HEIGHT
          imgSize.width = imgSize.height * aspectRatio
      }

    imgSize.width = Math.round(imgSize.width)
    imgSize.height = Math.round(imgSize.height)

      return {imgName, imgPathAbs, imgPathRel, imgSize}

    })
  
         
    // console.log(images)
    // fs.writeFileSync(fullFilePath, JSON.stringify(images.reverse()))
    fs.writeFileSync(fullFilePath, JSON.stringify(images.reverse(), null, 2))


    
    // console.log('fullFilePath:', fullFilePath);
    // console.log('images:', images);



    return images.reverse()

  }



getImages()