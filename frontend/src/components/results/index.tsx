import { ResultRow, SearchHeader } from '..'
import styles from './results.module.css'

export default function Results(){
  return(
    <div className={styles.container}>
      <SearchHeader title1="Top Matching Drivers" title2="ETA" />
      <ul className={styles.resultsUL}>
          <ResultRow name="Driver Name" phone="+49 1579 7163522" time="1h 52m" />
          <ResultRow name="Driver Name" phone="+49 1579 7163522" time="3h 52m" />
          <ResultRow name="Driver Name" phone="+49 1579 7163522" time="6h 52m" />
          <ResultRow name="Driver Name" phone="+49 1579 7163522" time="12h 52m" />
      </ul>
    </div>
  )
}