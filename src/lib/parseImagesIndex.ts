
import fs from 'fs'


export default async function parseImagesIndex(path: string) {
    try {
        const jsonContent = await fs.promises.readFile(path, 'utf-8')
        // Work with jsonContent here
        // console.log(jsonContent)
        const parsedData = JSON.parse(jsonContent)

        return parsedData

    } catch (error) {
        console.error('Error reading file:', error)
    }


}

//   // const jsonContent = fs.readFileSync(indexPath, 'utf-8');
    
//   // // Parse the JSON content into an object
//   // const images = JSON.parse(jsonContent);

//   // // Now, 'images' contains the parsed JSON data
//   // // console.log(images);

//   const jsonContent = fs.readFileSync(path.join(process.cwd(), 'public', 'content/wip/index.json'), 'utf-8')
//   const images = JSON.parse(jsonContent)
//   console.log(images)
