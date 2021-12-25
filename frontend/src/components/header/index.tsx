import styles from './header.module.css'

type Props = {
  title1: string
  title2?: string
}

export default function SearchHeader ({title1, title2}: Props) {
  return(
    <div className={styles.searchHeader}>
      <span>{title1}</span>
      <span>{title2}</span>
    </div>
  )
}