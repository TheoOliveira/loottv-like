import React from 'react'
import styles from './Sidebar.module.scss'
const categories = [
  {
    label: 'Most Viewed',
    path: ''
  }, {
    label: 'Most Liked',
    path: ''
  },
  {
    label: 'Music',
    path: ''
  },
  {
    label: 'Movies & Shows',
    path: ''
  },
  {
    label: 'Gaming',
    path: ''
  },
  {
    label: 'News',
    path: ''
  },
  {
    label: 'Learning',
    path: ''
  }, {
    label: 'Fashion & Beauty',
    path: ''
  },
  {
    label: 'Sports',
    path: ''
  }
]
export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
      <h2>
        Time Machine
      </h2>
      <span>Today</span> 
      {/* TODO: Date Picker for check most watched based on calendar? */}
      <h4>
        Featured Categories
      </h4> 
      <div className={styles.sidebarMenu}>
    {categories.map(item=> (
      <a href={item.path}>{item.label}</a>
    ))}
    </div>
    </div>
    <div className={styles.footerContainer}>

    </div>
    </div>
  )
}
