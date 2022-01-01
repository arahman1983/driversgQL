import { ReactElement } from 'react'
import { ResultRow, SearchHeader } from '..'
import styles from './results.module.css'

interface Driver {
  EAT: number
  name: string
  telephone: string
}

interface Props {
  data: Driver[]
}

export default function Results ({ data }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <SearchHeader title1='Top Matching Drivers' title2='ETA' />
      <ul className={styles.resultsUL}>
        {
          data?.map(({ name, telephone, EAT }, index) => <ResultRow name={name} phone={telephone} time={EAT} key={index} />)
        }
      </ul>
    </div>
  )
}
