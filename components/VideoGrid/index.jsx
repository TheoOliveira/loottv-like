import React, {useEffect, useState} from 'react'
import VideoCard from '../VideoCard'
import styles from './VideoGrid.module.scss'
import youtube from '../../api/youtube'
export default function VideoGrid() {
  const [resposta, setResposta] = useState([])
  async function res (){
    return await youtube.get('/search', {
      // params: {s
      //  order:'viewCount',
      //  publishedAfter:'2022-01-02T00%3A00%3A00Z',
      //  publishedBefore:'202-01-03T00%3A00%3A00Z'
      // }
    }) 
  }    

   useEffect(() => {
res().then(retorno => setResposta(retorno))
console.log(resposta.data)
  }, [resposta !== null])
  
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
      <h2>Today - Trending by Views</h2>
      <div className={styles.videoGrid} >
      
    {/* {resposta.map((item, i)=> (
    <VideoCard channelId={item.snippet.channelId} channelName={item.snippet.channelTitle} publishTime={item.snippet.publishTime} title={item.snippet.title} thumbnails={item.snippet.thumbnails}/>
    ))} */}

      </div>
      </div>
    </div>
  )
}
