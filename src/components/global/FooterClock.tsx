'use client'



import {useRef, useEffect} from 'react'

export default function FooterClock() {

    const currentTimeRef = useRef<HTMLSpanElement | null>(null)

    useEffect(() => {

        const updateCurrentTime = () => {
            const currentTime = new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" }) // Set time zone to EST
            // const currentTime = new Date().toLocaleTimeString("en-US") // Set time zone to EST

            if(currentTimeRef.current) {
                currentTimeRef.current.textContent = currentTime;
            }
        }

        updateCurrentTime()

        const intervalId = setInterval(updateCurrentTime, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

  return <span ref={currentTimeRef} />
}
