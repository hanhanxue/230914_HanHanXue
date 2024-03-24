"use client"

import { type Sketch } from "@p5-wrapper/react"
import { NextReactP5Wrapper } from "@p5-wrapper/next"
import { useEffect, useState, useRef } from "react"

const sketch: Sketch = (p5) => {
  let containerWidth = 0

  p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL)

  p5.updateWithProps = (props) => {
    if (props.containerWidth) {
      containerWidth = props.containerWidth
    }

    p5.resizeCanvas(containerWidth, containerWidth / 2.35)
  }

  p5.draw = () => {
    // p5.background(250)
    // p5.normalMaterial()
    // p5.push()
    // p5.rotateZ(p5.frameCount * 0.01)
    // p5.rotateX(p5.frameCount * 0.01)
    // p5.rotateY(p5.frameCount * 0.01)
    // p5.plane(100)
    // p5.pop()
    // p5.background(100)
    // p5.normalMaterial()
    // p5.noStroke()
    // p5.push()
    // // p5.rotateY(rotation)
    // p5.box(100)
    // p5.pop()
    p5.background(246)
    p5.normalMaterial()
    p5.push()
    p5.rotateZ(p5.frameCount * 0.01)
    p5.rotateX(p5.frameCount * 0.01)
    p5.rotateY(p5.frameCount * 0.01)
    p5.plane(100)
    p5.pop()
  }
}

export default function Page() {
  // const [rotation, setRotation] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(500)

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

  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setRotation((rotation) => rotation + 100),
  //     100,
  //   )

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  return (
    <div style={{width: '100%', height: `${containerWidth / 2.35}px`, backgroundColor: 'red'}} ref={containerRef}>

      <NextReactP5Wrapper sketch={sketch} containerWidth={containerWidth}  />
    </div>
  )

}
