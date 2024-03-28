"use client"

import styles from "./Header.module.scss"

import Link from "next/link"

import SuperManifoldLogomark from "./SuperManifoldLogomark"
import { useEffect, useState } from "react"
import useQuery from "@/hooks/useQuery"
import MenuButton from "./MenuButton"
import { FooterInner } from "./Footer"

const Header = () => {
  const isPhone = useQuery("(min-width: 768px)")
  // console.log(isPhone)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen((current) => !current)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {

    document.body.classList.toggle("overflow-y-hidden")

  }, [isMenuOpen])

  useEffect(() => {
    if(!isPhone) {closeMenu()}
  }, [isPhone])

  return (
    <header
      className={`
            ${styles.section}
            ${isMenuOpen ? styles.isMenuOpen : ""}
            `}
      data-theme="bob"
    >
      <div
        className={`
            ${styles.container} 
            framex body`}
      >
        {/* GroupA GroupA GroupA GroupA GroupA GroupA GroupA GroupA GroupA */}
        <div className={` ${styles.gridItem}  ${styles.groupA}  `}>
          <Link href={`/`} onClick={closeMenu}>
            <div className={`${styles.logo}`}>
              <SuperManifoldLogomark className={`${styles.logomark}`} />
              <div className={`${styles.logotype}`}>
                <span className={`${styles.name}`}>Han Han Xue</span>
                <span className={`${styles.tagline}`}> — Product Designer</span>
              </div>
            </div>
          </Link>

          <div className={` ${styles.menu}`}>
            <MenuButton
              isOpen={isMenuOpen}
              onClick={handleMenu}
            />
          </div>
        </div>

        {/* GroupB GroupB GroupB GroupB GroupB GroupB GroupB GroupB GroupB */}
        <nav
          className={` ${styles.gridItem} ${styles.nav}  ${styles.groupB}  `}
        >
          <ul className={`${styles.mainLinks}`}>
            <li>
              {" "}
              <Link href={`/#wip`} onClick={closeMenu}>
                {" "}
                <span>WIP</span>{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href={`/projects`} onClick={closeMenu}>
                {" "}
                <span>Projects</span>{" "}
              </Link>{" "}
            </li>
          </ul>
          <Link href={`/information`} onClick={closeMenu}>
            {" "}
            <span>Information</span>{" "}
          </Link>
        </nav>

        {/* GroupC GroupC GroupC GroupC GroupC GroupC GroupC GroupC GroupC */}
        <div className={`${styles.groupC}  `}>
          <FooterInner />
        </div>
      </div>
    </header>
  )
}

export default Header
