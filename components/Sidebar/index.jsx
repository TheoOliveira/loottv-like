import React from 'react'
import styles from './Sidebar.module.scss'
import Link from 'next/link'

const categories = [
  {
    label: 'Most Viewed',
    path: '/most-viewed'
  }, {
    label: 'Most Liked',
    path: '/most-liked'
  },
  {
    label: 'Music',
    path: '/music'
  },
  {
    label: 'Movies & Shows',
    path: '/moves-shows'
  },
  {
    label: 'Gaming',
    path: '/gaming'
  },
  {
    label: 'News',
    path: '/news'
  },
  {
    label: 'Learning',
    path: '/learning'
  }, {
    label: 'Fashion & Beauty',
    path: '/fashion'
  },
  {
    label: 'Sports',
    path: '/sports'
  }
]
export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
      <h4>
        Time Machine
      </h4>
      <span>Today</span> 
      <div className={styles.bar}></div>
      {/* TODO: Date Picker for check most watched based on calendar? */}
      <p style={{fontSize: '11px', textTransform: 'uppercase'}}>
        Featured Categories
      </p> 
      <div className={styles.sidebarMenu}>
    {categories.map(item=> (
      <Link href={item.path}><a>{item.label}</a></Link>
    ))}
    </div>
    </div>
    <div className={styles.footerContainer}>

    </div>
    </div>
  )
}
