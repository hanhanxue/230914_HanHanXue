'use client'
import type {IImage} from '@/models/Images'
import {useRef, useEffect, useState, useLayoutEffect} from 'react'
import ImageContainer from './ImageContainer'

const layout = require('justified-layout')


export default function JustifiedLayout({images, aspectRatios} ) {

    const containerRef = useRef(null)
    const [containerWidth, setContainerWidth] = useState(0)


    const layoutGeometry = layout(aspectRatios, {
        containerPadding: 0,
        containerWidth: containerWidth,
        boxSpacing: 12,
    })
    useLayoutEffect(() => {
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


    // console.log(images)
    // console.log(layoutGeometry)


  return (
    <div 
    ref={containerRef} // Assign the ref to the container div

    style={{
    position: 'relative',
    // background: 'red',
    height: layoutGeometry.containerHeight
    }}>
 
        {layoutGeometry.boxes.map((box, index) => {
            // console.log(images[index])
            return (
                <div
                key={index}
                style={{
                    position: 'absolute',
                    background: 'blue',
                    height: box.height,
                    width: box.width,
                    top: box.top,
                    left: box.left,
                    // borderRadius: '8px',
                    overflow: 'hidden',
                }}>
                    <ImageContainer image={images[index]} />
                </div>
            )
        })}
    </div>
  )
}
