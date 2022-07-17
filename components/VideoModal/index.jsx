import React from 'react'
import styles from './VideoModal.module.scss'


export default function VideoModal({ isModalOpen, children}) {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.overlay}>
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
