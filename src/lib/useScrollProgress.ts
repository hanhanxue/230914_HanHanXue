// 'use client'


import { useState, useEffect } from "react";

const useScrollProgress = () => {
    

    const calcProgress = () => {
            // This will calculate how many pixels the page is vertically
            const winScroll = document.documentElement.scrollTop; //document.body.scrollTop || 

            const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

            // console.log(`
            // scrollTop: ${document.documentElement.scrollTop}
            // scrollHeight: ${document.documentElement.scrollHeight}
            // clientHeight: ${document.documentElement.clientHeight}
            // height: ${height}
            // `)

            const scrolled = (winScroll / height) * 100;
            // console.log(`scrolled: ${scrolled}`)
            return scrolled
    }
    const [scrollProgress, setScrollProgress] = useState(calcProgress())


    useEffect(() => {
        const handleScroll = () => {
            const progress = calcProgress()
            setScrollProgress(progress)

        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return scrollProgress
}

export default useScrollProgress