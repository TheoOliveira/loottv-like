import React, {useEffect, useState} from 'react'
import VideoCard from '../VideoCard'
import styles from './VideoGrid.module.scss'
import youtube from '../../api/youtube'
export default function VideoGrid() {
  const [resposta, setResposta] = useState()
  async function res (){
    return await youtube.get('/search', {
      params: {
        q: 'youtube api'
      }
    }) 
  }    
  useEffect(() => {
 
res().then(retorno => setResposta(retorno))
console.log(resposta)
  }, [])
  
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
