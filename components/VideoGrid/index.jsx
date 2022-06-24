import React from 'react'
import VideoCard from '../VideoCard'
import styles from './VideoGrid.module.scss'
export default function VideoGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
      <h2>Today - Trending by Views</h2>
      <div className={styles.videoGrid} >
      
      <VideoCard/> 
      <VideoCard/>  
      <VideoCard/>  
      <VideoCard/>  
      <VideoCard/>  
      <VideoCard/>  
      <VideoCard/>  
      <VideoCard/>  
      <VideoCard/>  
      <VideoCard/>  
      <VideoCard/>  
      <VideoCard/>  
      <VideoCard/>  
      <VideoCard/>  

      </div>
      </div>
    </div>
  )
}
