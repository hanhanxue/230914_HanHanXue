
const sizeOf = require('image-size')
import fs from 'fs'
import path from 'path'


const  convertPascalToSpaceSeparated = (pascalString:string) => {
  if (!pascalString) {
    return 'ERROR convertPascalToSpaceSeparated undefined' // Return an empty string for undefined or empty input
  }

  return pascalString
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters
    .toLowerCase() // Convert to lowercase
}

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
      // const filenameSplit = fileObj.name.split('_')

      const titleRaw = path.parse(filename).name.split('_')[2]
      const title = convertPascalToSpaceSeparated(titleRaw)

      const pathAbs = path.join(fileObj.path, filename)
      const pathRel = path.join(intermediatePath, filename)

      const dimensions = sizeOf(pathAbs)

      const MAX_WIDTH = 960
      const MAX_HEIGHT = 720

      const aspectRatio = dimensions.width / dimensions.height

      if(dimensions.width > MAX_WIDTH) {
        dimensions.width = MAX_WIDTH
        dimensions.height = dimensions.width / aspectRatio
      }

      if(dimensions.height > MAX_HEIGHT) {
          dimensions.height = MAX_HEIGHT
          dimensions.width = dimensions.height * aspectRatio
      }

    dimensions.width = Math.round(dimensions.width)
    dimensions.height = Math.round(dimensions.height)

      return {filename, title, pathAbs, pathRel, dimensions, aspectRatio}

    })

    fs.writeFileSync(fullFilePath, JSON.stringify(images.reverse(), null, 2))

    return images.reverse()

  }



getImageData('images/archive')
getImageData('images/home')
getImageData('assets/emojis')




// function convertPascalToSpaceSeparated(pascalString: string) {
//   return pascalString
//     .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters
//     .toLowerCase(); // Convert to lowercase
// }