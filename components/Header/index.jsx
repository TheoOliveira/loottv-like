import React from 'react'
import Image from 'next/image'
import Searchbar from '../Searchbar/index'
import styles from './Header.module.scss'
import Logo from '../Logo'

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.containerLogoHam}>
      <button className={styles.hamButton}>
      </button>
      <Logo/>
      </div>
      <Searchbar />
    </header>
  )
}
