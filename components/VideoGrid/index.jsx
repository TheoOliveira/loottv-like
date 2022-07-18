import React, { useEffect, useState } from 'react'
import VideoCard from '../VideoCard'
import styles from './VideoGrid.module.scss'
import { getLatestVideos } from "../../api/getVideos";
import orderVideo from "../../utils/orderVideo"
import truncate from "../../utils/truncate"
import formatView from "../../utils/formatView"
import VideoModal from '../VideoModal';
import VideoEmbed from '../VideoEmbed';
import useGlobalState from "../../store/store"
import { checkPastFourMonths, checkPastMonth, checkPastWeek, checkToday } from '../../utils/checkPeriods';
/* 
* * 2) ter busca no app
* * 4) rotas para todas as categorias
*/

export default function VideoGrid() {
  const store = useGlobalState()
  const [resposta, setResposta] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState({
    videoId: "",
    isSetOpen: false
  })

  useEffect(() => {
    getLatestVideos(store.getDefaultDateRange).then(item => {
      let orderItem = orderVideo(item)
      setResposta(orderItem)
      console.log('res', resposta)
    })
  }, [store.getDefaultDateRange])
  function handleTitle() {
    return (
      <>
        {checkToday() == store.getDefaultDateRange ? 'Last 24 Hours' 
        : checkPastWeek() == store.getDefaultDateRange ? 'Last Week' 
        : checkPastMonth() == store.getDefaultDateRange ? 'Last Month' 
        : checkPastFourMonths() == store.getDefaultDateRange ? 'Last Four Months' : 'Last 24 hours'}
      </>
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>{handleTitle()} - Trending by Views</h2>
        <div className={styles.videoGrid} >

          {resposta.map((item, i) => (
            <>
              <VideoCard key={item.videoId}
                rank={i}
                channelName={item.channelTitle}
                publishTime={item.publishTime}
                title={truncate(item.title, 35)}
                thumbnails={item.thumbnails.medium.url}
                viewCount={formatView(item.viewCount)}
                handleShow={() => setCurrentVideo(item.videoId, setIsOpen(true))}
              />
            </>
          ))}
        </div>
        {isOpen && <VideoModal setIsOpen={setIsOpen}>
          <VideoEmbed embedId={currentVideo} />
        </VideoModal>}
      </div>
    </div>
  )
}
