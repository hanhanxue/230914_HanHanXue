const sizeOf = require('image-size')

const fs = require('fs');
const path = require('path');

interface IDirent {
    name: string;
    path: string;
}


const calcDimensions = (width: number, height: number, MAX_WIDTH : number, MAX_HEIGHT : number) => {

    const aspectRatio = width / height

    if(width > MAX_WIDTH) {
      width = MAX_WIDTH
      height = width / aspectRatio
    }

    if(height > MAX_HEIGHT) {
        height = MAX_HEIGHT
        width = height * aspectRatio
    }

  const maxWidth = Math.ceil(width)
  const maxHeight = Math.ceil(height)

  return {maxWidth, maxHeight, aspectRatio}
}


const indexImages = (inputPath: string) => {

    const root = process.cwd()
    const dirPath = path.join(root, 'public', inputPath)
    const indexPath = path.join(dirPath, '_index.json')

    // console.log(dirPath)
    // console.log(indexPath)
    const dirents = fs.readdirSync(dirPath, {withFileTypes: true})

    const images = dirents
    .filter((dirent : IDirent) => {
    // skip dirent with name that starts with _
      const reg_exp = /^_/gm
      if(reg_exp.test(dirent.name)) return false
      return true
    })
    .map((dirent : IDirent) => {
        const filename = dirent.name
        const fileExtension = path.extname(filename)
        const src = path.join(inputPath, filename).replace(/\\/g, '/')

        const {width, height} = sizeOf(path.join(dirent.path, filename))
        const {maxWidth, maxHeight, aspectRatio} = calcDimensions(width, height, 960, 720)

        const alt = 'product designer han han xue'

        const unoptimized = fileExtension === '.gif' ? true : false 

        // console.log(filename, fileExtension)

        return {
            src,
            width,
            height,
            alt,

            aspectRatio,
            maxWidth,
            maxHeight,
            filename,
            unoptimized,
        }
    })


    fs.writeFileSync(indexPath, JSON.stringify(images.reverse(), null, 2))
}

indexImages('/content/wip')
indexImages('/content/test')





//         // Wait for user input before exiting
//         console.log('Press Enter to exit.');
//         process.stdin.resume();
//         process.stdin.on('data', process.exit.bind(process, 0));

    // fs.writeFile(indexPath, 'yoBirtch', (e : Error | null) => {
    //     if (e) {
    //         console.error('Error writing file:', e)
    //       } else {
    //         console.log('File written successfully!')
    //       }
    // })