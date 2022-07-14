import React, {useEffect, useState} from 'react'
import VideoCard from '../VideoCard'
import styles from './VideoGrid.module.scss'
import {getLatestVideos} from "../../api/getVideos";
/* 
* * 1) pegar api e jogar aqui
* * 2) ter busca no app
* * 3) abrir página do video e ser possivel assistir 
* * 4) rotas para todas as categorias
* * 5)  puxar tudo do db
*/
export default function VideoGrid() {
  const [resposta, setResposta] = useState([])


   useEffect(() => {
getLatestVideos().then(item => setResposta(item))
  }, [resposta.length > 1])
  
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
      <h2>Today - Trending by Views</h2>
      <div className={styles.videoGrid} >
      
    {resposta.map((item, i)=> (
      
    <VideoCard  key={i} channelId={item.channelId}
     channelName={item.channelTitle} 
     publishTime={item.publishTime} 
     title={item.title} 
     thumbnails={item.thumbnails.default.url}
     viewCount={item.thumbnails.viewCount}
     />
    ))}

      </div>
      </div>
    </div>
  )
}
