import { useState } from "react";
import { Search } from "../../../assets/images";
import { Suggestions } from "../../components";
import SearchHeader from "./header";
import styles from './searchView.module.css'

export default function SearchView (){
  const [searchTxt, setSearchTxt] = useState<string>("")
  const [suggestionShow, setSuggestionShow] = useState<boolean>(false)
  

  const handleSearchChange = (e:React.FormEvent<HTMLInputElement>) => {
    setSearchTxt(e.currentTarget.value)
    setSuggestionShow(true)
  }

  const suggestClickHandler = (address : string) => {
    setSearchTxt(address)
    setSuggestionShow(false)
  }

  return(
    <>
      <div className={styles.searchContainer}>
        <SearchHeader />
        <div className={styles.formContainer}>
          <input type="search" className={styles.searchInput} placeholder="Pickup location" value={searchTxt} onChange={handleSearchChange} />
          <img src={Search} alt ="search" className={styles.searchImg} />
          {
            suggestionShow &&
              <ul className= {styles.suggestions}>
                <Suggestions address="text1" clickHandler = {suggestClickHandler} />
                <Suggestions address="text3" clickHandler = {suggestClickHandler} />
                <Suggestions address="text2" clickHandler = {suggestClickHandler} />
              </ul>
          }
        </div>
      </div>
      
    </>
  )
}