import React, { useState } from 'react'
import Image from 'next/image'
import Searchbar from '../Searchbar/index'
import styles from './Header.module.scss'
import Logo from '../Logo'


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function openSidebar() {
    setIsOpen(true)
    const sidebar = document.querySelector('.Sidebar_container__mO_GZ').style.width = "0%"
    const grid = document.querySelector('.VideoGrid_container__5Eqyd').style.width = "100%"
  }

  function closeSidebar() {
    setIsOpen(false)
    let w = window.innerWidth;
    if (w >= 800) {
      const sidebar = document.querySelector('.Sidebar_container__mO_GZ').style.width = "10%"
      const grid = document.querySelector('.VideoGrid_container__5Eqyd').style.width = "90%"
    }else {
      const sidebar = document.querySelector('.Sidebar_container__mO_GZ').style.width = "30%"
      const grid = document.querySelector('.VideoGrid_container__5Eqyd').style.width = "70%"
    }
  }
  return (
    <header className={styles.container}>
      <div className={styles.containerLogoHam}>
        <button className={styles.hamButton} onClick={() => !isOpen ? openSidebar() : closeSidebar()}>
        </button>
        <Logo />
      </div>
      <Searchbar />
    </header>
  )
}
