import React from 'react'
import styles from './Searchbar.module.scss'
export default function Searchbar() {
  return (
    <div className={styles.container}>
    <div className={styles.innerContainer}>
      <input className={styles.searchInput} placeholder="Search">
      </input>
      <button className={styles.searchButton}>
        
      </button>
    </div>
    </div>
  )
}
