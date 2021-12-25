import { useEffect, useState } from 'react'
import styles from './resultsRow.module.css'

type Props = {
  name: string,
  phone: string,
  time: string
}

type colorState = 'success' | 'primary' | 'warning' | 'danger'

export default function ResultRow({name, phone, time}: Props){
  const [state, setState] = useState<colorState>('danger') // success | primary | warning | danger

  useEffect(() => {
    const hours = Number(time.split("h")[0])
    hours < 2 
      ? setState('success')
      : hours < 5
      ? setState('primary')
      : hours < 10
      ? setState('warning')
      : setState('danger')
  }, [time])

  return(
    <li className={styles.ResultRow}>
      <div className={styles.driverData}>
        <span className={styles.name}>{name}</span>
        <span className={styles.phone}>{phone}</span>
      </div>
      <div className={styles.timeContainer}>
        <span className={`${styles.time} ${styles[state]}`}>{time}</span>
      </div>
    </li>
  )
}