'use client'
import type {IImage} from '@/models/Images'
import {useRef, useEffect, useState, useLayoutEffect} from 'react'
import ImageContainer from './ImageContainer'


const layout = require('justified-layout')

interface Props {
    images: IImage[]
    aspectRatios: number[]
}

interface ILayoutBox {
    aspectRatio: number,
    top: number,
    width: number,
    height: number,
    left: number
}

export default function JustifiedLayout({images, aspectRatios} : Props) {

    const containerRef = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState(100)


    const layoutGeometry = layout(aspectRatios, {
        containerPadding: 0,
        containerWidth: containerWidth,
        boxSpacing: 12,
    })

    
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

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


  return (

    <div 
    ref={containerRef} // Assign the ref to the container div
    style={{
        // background: 'blue',
    position: 'relative',
    height: layoutGeometry.containerHeight
    }}>
 


        {layoutGeometry.boxes.map((layoutBox : ILayoutBox, index : number) => {
            // console.log(images[index])
            return (
                <div
                key={index}
                style={{
                    // background: 'aqua',
                    position: 'absolute',
                    height: layoutBox.height,
                    width: layoutBox.width,
                    top: layoutBox.top,
                    left: layoutBox.left,
                    // borderRadius: '8px',
                    // overflow: 'hidden',
                }}>
                    <ImageContainer image={images[index]} />
                </div>
            )
        })}
    </div>
  )
}
