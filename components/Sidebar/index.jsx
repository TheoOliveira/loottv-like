import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Sidebar.module.scss'
import DatePicker from '../DatePicker'
import DefaultDateRangeDropdown from '../DefaultDateRangeDropdown'

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

const footerLinks = [
  {
    label: 'Twitter',
    path: '/'
  },
  {
    label: 'Contact',
    path: '/contact'
  },
  {
    label: 'Privacy',
    path: '/privacy'
  },
]
export default function Sidebar() {
  const [date, setDate] = useState(new Date());
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <h4>
          Time Machine
        </h4>
        <div className={styles.dateContainer}>
          <DefaultDateRangeDropdown />
          <DatePicker />
        </div>
        <div className={styles.bar}></div>
        {/* TODO: Date Picker for check most watched based on calendar? */}
        <p style={{ fontSize: '11px', textTransform: 'uppercase', marginBlockStart: '1em', marginBlockEnd: '1em' }}>
          Featured Categories
        </p>
        <div className={styles.sidebarMenu}>
          {categories.map((item, i) => (
            <Link key={i} href={item.path}><a>{item.label}</a></Link>
          ))}
        </div>
      </div>
      <div className={styles.footerContainer}>
        {footerLinks.map((item, i) => (
          <Link key={i} href={item.path}><a>{item.label}</a></Link>
        ))}
      </div>
    </div>
  )
}
