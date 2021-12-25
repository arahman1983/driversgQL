import { Search } from "../../../assets/images";
import SearchHeader from "./header";
import styles from './searchView.module.css'

export default function SearchView (){
  return(
    <div className={styles.searchContainer}>
      <SearchHeader />
      <div className={styles.formContainer}>
        <input type="search" className={styles.searchInput} placeholder="Pickup location" />
        <img src={Search} alt ="search" className={styles.searchImg} />
      </div>
    </div>
  )
}