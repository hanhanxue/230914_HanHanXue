'use client'

import {
  createContext,
  useCallback,
  useState,
  useEffect,
} from "react"

interface IWindowContextProps {
  clientHeight: number
  clientWidth: number
}

export const WindowContext = createContext<IWindowContextProps>({
  clientHeight: 0,
  clientWidth: 0,
})





export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState<IWindowContextProps>({
    clientHeight: 0,
    clientWidth: 0,
  })

  const getClientWidth = useCallback(() => {
    return document.documentElement.getBoundingClientRect().width
  }, [])

  const getClientHeight = useCallback(() => {
    return document.documentElement.getBoundingClientRect().height
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        clientHeight: getClientHeight(),
        clientWidth: getClientWidth(),
      })
    }

    handleResize() // Set initial dimensions

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [getClientHeight, getClientWidth])

  return dimensions
}






const WindowProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dimensions = useWindowDimensions()

  return (
    <WindowContext.Provider value={dimensions}>
      {children}
    </WindowContext.Provider>
  )
}

export default WindowProvider