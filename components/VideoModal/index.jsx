import React from 'react'
import styles from './VideoModal.module.scss'


export default function VideoModal({ setIsOpen, children}) {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.overlay} onClick={()=> setIsOpen(false)}>
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
