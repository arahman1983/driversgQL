import styles from './searchView.module.css'

export default function SearchHeader () {
  return(
    <div className={styles.searchHeader}>
      <span>Search for an address</span>
    </div>
  )
}