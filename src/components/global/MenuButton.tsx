'use client'

import { SVGProps } from "react"
import { useEffect, useState } from "react"

import styles from './MenuButton.module.scss'


interface IProp {
  isOpen: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
  
}

const MenuButton = ({isOpen, onClick}: IProp) => {
//  const  [isOpen, setIsOpen] = useState(false)



return (
  <>
    <button className={`
    ${styles.menuButton} 
  `}
  onClick={onClick}
  >

    <div className={`
    ${styles.iconContainer}
    ${isOpen ? styles.isOpen : ''}
    `}>
    <span className={`${styles.iconStroke}`}></span>
    <span className={`${styles.iconStroke}`}></span>
    <span className={`${styles.iconStroke}`}></span>
    </div>

    
  </button>

  {/* <div className={`${styles.mobileMenu} `}>

  </div> */}
  </>


)


}


export default MenuButton


  //   <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   width={20}
  //   height={20}
  //   fill="none"
  //   {...props}
  // >
  //   <path fill="#000" d="M3 4h14v2H3zM3 14h14v2H3zM3 9h14v2H3z" />
  // </svg>
