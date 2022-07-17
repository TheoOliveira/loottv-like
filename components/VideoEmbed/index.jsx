import React from 'react'
import styles from "./VideoEmbed.module.scss"
export default function VideoEmbed({embedId}) {
  return (
    <div className={styles.videoResponsive}>
        <iframe 
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
    </div>
  )
}
