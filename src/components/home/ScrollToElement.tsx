'use client'

import { ReactNode } from "react"


interface ScrollToElementProps {
    elementId: string
    children?: ReactNode
}


export default function ScrollToElement({elementId, children}: ScrollToElementProps) {

const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({behavior: "smooth", block: "start", inline:"nearest"})
}

  return (
    <a onClick={() => scrollToElement(elementId)} style={{cursor: "pointer"}}>
    {children}
    </a>
  )
}
