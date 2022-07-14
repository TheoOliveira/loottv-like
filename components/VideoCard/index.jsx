import Image from 'next/image'
import React from 'react'
import styles from './VideoCard.module.scss'
export default function VideoCard({videoId, channelId, channelName, viewCount, publishTime, thumbnails, title }) {
  return (
    <div className={styles.container}>
      <img src={thumbnails}  />
      <div className={styles.details}>
      <div className={styles.rank}><span>1</span></div>
      <div className={styles.textualDetail}>
      <div className={styles.title}><p>{title}</p></div>
      <div className={styles.channel}><span>{channelName}</span></div>
      <div className={styles.textualFooterDetail}>
      <div className={styles.views}><span>{viewCount}</span></div>
      <div className={styles.views}><span>&#8226;</span></div>
      <div className={styles.posted}><span>{publishTime}</span></div>
      </div>
      </div>
      </div>
    </div>
  )
}
