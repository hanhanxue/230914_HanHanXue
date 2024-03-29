"use client"

import { type Sketch } from "@p5-wrapper/react"
import { NextReactP5Wrapper } from "@p5-wrapper/next"
import { useEffect, useState, useRef } from "react"

interface IProps {
  containerWidth: number
}

const sketch: Sketch = (p5) => {
  let containerWidth = 0

  p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL)

  p5.updateWithProps = (props: IProps) => {
    if (props.containerWidth) {
      containerWidth = props.containerWidth
    }
    p5.resizeCanvas(containerWidth, containerWidth / 2.35)
  }

  p5.draw = () => {
    p5.background(246)
  }
}

export default function Page() {

  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(100)

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width)
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
    <div style={{width: '100%', height: `${containerWidth / 2.35}px`, backgroundColor: 'red'}} ref={containerRef}>
      <NextReactP5Wrapper sketch={sketch} containerWidth={containerWidth}  />
    </div>
  )
}




  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setRotation((rotation) => rotation + 100),
  //     100,
  //   )

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  // p5.normalMaterial()
  // p5.push()
  // p5.rotateZ(p5.frameCount * 0.01)
  // p5.rotateX(p5.frameCount * 0.01)
  // p5.rotateY(p5.frameCount * 0.01)
  // p5.plane(100)
  // p5.pop()