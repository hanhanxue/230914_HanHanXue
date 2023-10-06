

interface image {
    filename: string
    imgTitle: string
    imgPathAbs: string
    imgPathRel: string
    aspectRatio: number
    imgSize: {
      width: number
      height: number
    }
  };

  export type {image}