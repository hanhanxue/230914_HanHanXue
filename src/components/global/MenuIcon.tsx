'use client'

import { SVGProps } from "react"
import { useEffect, useState } from "react"

import styles from './MenuIcon.module.scss'

const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
 const  [isOpen, setIsOpen] = useState(false)

return (
  <div className={`${styles.iconContainer} 
  ${isOpen ? styles.isOpen : ''}`}
  onClick={() => {setIsOpen((current) => !current)}}
  >

    <span className={`${styles.iconStroke}`}></span>
    <span className={`${styles.iconStroke}`}></span>
    <span className={`${styles.iconStroke}`}></span>
    
  </div>


)


}


export default MenuIcon


  //   <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   width={20}
  //   height={20}
  //   fill="none"
  //   {...props}
  // >
  //   <path fill="#000" d="M3 4h14v2H3zM3 14h14v2H3zM3 9h14v2H3z" />
  // </svg>
