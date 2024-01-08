'use client'

import { useState, useEffect, useLayoutEffect } from "react";

const useScrollProgress = () => {

    const isSSR = typeof window === "undefined"

    const calcProgress = () => {
        // if (isSSR || !document) {
        //     return 0
        // }
        if(typeof window === "undefined" || typeof document === "undefined") return 0

            // This will calculate how many pixels the page is vertically
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop; //

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
    // console.log(scrollProgress)

    useLayoutEffect(() => {
        const handleScroll = () => {
            const progress = calcProgress()
            setScrollProgress(progress)
        }


        window.addEventListener("scroll", handleScroll)
        // window.addEventListener("load", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            // window.removeEventListener("load", handleScroll)
        }
    }, [])


    return scrollProgress
}

export default useScrollProgress