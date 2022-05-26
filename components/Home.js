import React from 'react'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.backimage}>
        <div className={styles.maintext}>
          <h1>COIN 인공지능 <em>자동매매</em> </h1>
        </div>
      </div>
      <div className={styles.mainbox}>
        <div className={styles.wrapper}>
          <div className={styles.box1}>box1</div>
          <div className={styles.box2}>box2</div>
          <div className={styles.box3}>box3</div>
        </div>
      </div>
    </div>
  )
}
 