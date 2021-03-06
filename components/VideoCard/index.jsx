import Image from 'next/image'
import React from 'react'
import styles from './VideoCard.module.scss'
export default function VideoCard({ handleShow, rank,  videoId, channelName, viewCount, publishTime, thumbnails, title }) {
  
  return (
    <div className={styles.container} onClick={() => handleShow(videoId, true)}>
      <img src={thumbnails} width="263" height="147" />
      <div className={styles.details}>
      <div className={styles.rank}><span>{rank +1}</span></div>
      <div className={styles.textualDetail}>
      <div className={styles.title}><p>{title}</p></div>
      <div className={styles.channel}><span>{channelName}</span></div>
      <div className={styles.textualFooterDetail}>
      <div className={styles.views}><span>{viewCount}</span></div>
      <div className={styles.views}><span>&#8226;</span></div>
      <div className={styles.posted}><span>{new Date(publishTime.seconds*1000).toLocaleDateString("en-US")}</span></div>
      </div>
      </div>
      </div>
    </div>
  )
}
