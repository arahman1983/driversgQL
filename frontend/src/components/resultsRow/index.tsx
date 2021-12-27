import { useEffect, useState } from 'react'
import styles from './resultsRow.module.css'

type Props = {
  name: string,
  phone: string,
  time: number
}

type colorState = 'success' | 'primary' | 'warning' | 'danger'

export default function ResultRow({name, phone, time}: Props){
  const [state, setState] = useState<colorState>('danger') // success | primary | warning | danger
  const [EAT, setEAT] = useState<string>("")

  useEffect(() => {
    const hours = Math.floor(time)
    const minutes = Math.floor((time - hours) * 60)

    setEAT(`${hours}h ${(minutes<10 && minutes>0 ) ? "0"+minutes: minutes}m`)

    time < 2 
      ? setState('success')
      : time < 5
      ? setState('primary')
      : time < 10
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
        <span className={`${styles.time} ${styles[state]}`}>{EAT}</span>
      </div>
    </li>
  )
}