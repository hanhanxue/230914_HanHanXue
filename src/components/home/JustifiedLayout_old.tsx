"use client"
import type { IImage } from "@/models/Images"
import { useRef, useEffect, useState, useContext} from "react"
import ImageContainer from "./ImageContainer"
import { WindowContext } from "@/providers/WindowProvider"

const layout = require("justified-layout")

interface IProps {
  images: IImage[]
  aspectRatios: number[]
}

interface ILayoutBox {
  aspectRatio: number
  top: number
  width: number
  height: number
  left: number
}




export default function JustifiedLayout({ images, aspectRatios }: IProps) {
  const containerRef = useRef<HTMLDivElement>(null)


  const {clientWidth} = useContext(WindowContext)
  const [containerWidth, setContainerWidth] = useState(100)
  const [containerWidthFloat, setContainerWidthFloat] = useState(100)

  const layoutGeometry = layout(aspectRatios, {
    containerPadding: 0,
    containerWidth: clientWidth - 32,
    boxSpacing: 16,
    targetRowHeight: 320,
    targetRowHeightTolerance: 0.25,
  })

  console.log(containerWidth, containerWidthFloat, clientWidth - 32)


  // two properties:
  // Ref.current.offsetWidth (int value) 
  // Ref.current.getBoundingClientRect().width floating precision

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidthFloat(containerRef.current.getBoundingClientRect().width)
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateContainerWidth()

    const handleResize = () => {
      updateContainerWidth()
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div
      ref={containerRef} // Assign the ref to the container div
      style={{
        // background: 'blue',
        position: "relative",
        height: layoutGeometry.containerHeight,
      }}
    >
      {layoutGeometry.boxes.map((layoutBox: ILayoutBox, index: number) => {
        // console.log(images[index])
        return (
          <div
            key={index}
            style={{
              // background: 'aqua',
              position: "absolute",
              height: layoutBox.height,
              width: layoutBox.width,
              top: layoutBox.top,
              left: layoutBox.left,
              // borderRadius: '8px',
              // overflow: 'hidden',
            }}
          >
            <ImageContainer image={images[index]} />
          </div>
        )
      })}
    </div>
  )
}
