import { ResultRow, SearchHeader } from '..'
import styles from './results.module.css'

type Driver = {
  EAT: number
  name: string
  telephone: string
}

type Props = {
  data: Driver[]
}

export default function Results({data}:Props){

  return(
    <div className={styles.container}>
      <SearchHeader title1="Top Matching Drivers" title2="ETA" />
      <ul className={styles.resultsUL}>
        {
          data && data.map(({name,telephone,EAT}) => <ResultRow name={name} phone={telephone} time={EAT} />)
        }
      </ul>
    </div>
  )
}