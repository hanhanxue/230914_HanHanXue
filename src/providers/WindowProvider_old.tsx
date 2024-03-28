// IMPORTANT Using this version, entire site becomes client side
"use client"

import { createContext, useCallback, useState, useEffect } from "react"

interface IWindowContextProps {
  clientHeight: number
  clientWidth: number
}

export const WindowContext = createContext<IWindowContextProps>({
  clientHeight: 0,
  clientWidth: 0,
})





export default function WindowProvider({
  children,
}: {
  children: React.ReactNode
}) {



  const getClientWidth = useCallback(() => {
    // return Math.max(
    //   document.documentElement.clientWidth || 0,
    //   window.innerWidth || 0,
    // )
    return document.documentElement.getBoundingClientRect().width
  }, [])
  const getClientHeight = useCallback(() => {
    // return Math.max(
    //   document.documentElement.clientHeight || 0,
    //   window.innerHeight || 0,
    // )
    return document.documentElement.getBoundingClientRect().height
  }, [])

  // IMPORTANT Using this version, can't move these above getClientHeight and getClientWidth
  const [clientHeight, setClientHeight] = useState<number>(getClientHeight())
  const [clientWidth, setClientWidth] = useState<number>(getClientWidth())


  useEffect(() => {
    const handleResize = () => {
      setClientHeight(getClientHeight())
      setClientWidth(getClientWidth())
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [getClientHeight, getClientWidth])





  return (
    <WindowContext.Provider value={{ clientHeight, clientWidth }}>
      {children}
    </WindowContext.Provider>
  )
}













//   const getClientHeight = useCallback(() => {
//     return Math.max(
//       document.documentElement.clientHeight || 0,
//       window.innerHeight || 0,
//     )
//   }, [])
//   const getClientWidth = useCallback(() => {
//     return Math.max(
//       document.documentElement.clientWidth || 0,
//       window.innerWidth || 0,
//     )
//   }, [])

//   const [clientHeight, setClientHeight] = useState<number>(getClientHeight())
//   const [clientWidth, setClientWidth] = useState<number>(getClientWidth())

//   useEffect(() => {
//     const handleResize = () => {
//       setClientHeight(getClientHeight())
//       setClientWidth(getClientWidth())
//     }

//     window.addEventListener("resize", handleResize)
//     return () => {
//       window.removeEventListener("resize", handleResize)
//     }
//   }, [getClientHeight, getClientWidth])
