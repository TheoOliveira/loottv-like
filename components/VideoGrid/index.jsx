import React, {useEffect, useState} from 'react'
import VideoCard from '../VideoCard'
import styles from './VideoGrid.module.scss'
import {getLatestVideos} from "../../api/getVideos";
import orderVideo from "../../utils/orderVideo"
import truncate from "../../utils/truncate"
import formatView from "../../utils/formatView"
import VideoModal from '../VideoModal';
import VideoEmbed from '../VideoEmbed';
/* 
* * 2) ter busca no app
* * 3) abrir página do video e ser possivel assistir 
* * 4) rotas para todas as categorias
* * 5)  puxar tudo do db
*/

export default function VideoGrid() {
  const [resposta, setResposta] = useState([])
 const [isOpen, setIsOpen] = useState(false)

   useEffect(() => {
getLatestVideos().then(item => {
  let orderItem = orderVideo(item)
  setResposta(orderItem)
})
console.log(resposta)
  }, [resposta.length > 1])
  
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
      <h2>Today - Trending by Views</h2>
      <div className={styles.videoGrid} >
      
    {resposta.map((item, i)=> (
      <>
    <VideoCard  key={i}
    rank={i}
     channelName={item.channelTitle} 
     publishTime={item.publishTime} 
     title={truncate(item.title, 35)} 
     thumbnails={item.thumbnails.medium.url }
     viewCount={formatView(item.viewCount)}
     />
     {isOpen && <VideoModal>
        <VideoEmbed  embedId={item.videoId} />
      </VideoModal>}
      </>
    ))}

      </div>
      
      </div>
    </div>
  )
}
