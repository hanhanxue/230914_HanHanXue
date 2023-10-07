

interface image {
    filename: string
    title: string
    pathAbs: string
    pathRel: string
    aspectRatio: number
    dimensions: {
      width: number
      height: number
    }
  };

  export type {image}