import Image from 'next/image'
import React from 'react'
import styles from './VideoCard.module.scss'
export default function VideoCard() {
  return (
    <div className={styles.container}>
      <Image src={"https://source.unsplash.com/random/260x150"} width="260" height="150" />
      <div className={styles.details}>
      <div className={styles.rank}><span>1</span></div>
      <div className={styles.textualDetail}>
      <div className={styles.title}><p>Lorem ipsum dolor sit amet.</p></div>
      <div className={styles.channel}><span>Lorem, ipsum.</span></div>
      <div className={styles.textualFooterDetail}>
      <div className={styles.views}><span>200k</span></div>
      <div className={styles.posted}><span>1 year ago</span></div>
      </div>
      </div>
      </div>
    </div>
  )
}
