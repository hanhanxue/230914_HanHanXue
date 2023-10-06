
const sizeOf = require('image-size')
import fs from 'fs'
import path from 'path'



const getImageData = (intermediatePath: string) => {

    const root = process.cwd()
    
    const dirPath = path.join(root, 'public', intermediatePath)
    const fullFilePath = path.join(root, 'public', intermediatePath, '_index.json')

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

      const filename = fileObj.name
      const filenameSplit = fileObj.name.split('_')

      const imgTitle = filenameSplit[2]

      const imgPathAbs = path.join(fileObj.path, filename)
      const imgPathRel = path.join(intermediatePath, filename)

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

      return {filename, imgTitle, imgPathAbs, imgPathRel, imgSize, aspectRatio}

    })

    fs.writeFileSync(fullFilePath, JSON.stringify(images.reverse(), null, 2))

    return images.reverse()

  }



getImageData('images/archive')
getImageData('images/home')
getImageData('assets/emojis')