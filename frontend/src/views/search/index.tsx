import { useState } from "react";
import { Check, Search } from "../../../assets/images";
import { Results, Suggestions, SearchHeader } from "../../components";
import styles from './searchView.module.css'

export default function SearchView() {
  const [searchTxt, setSearchTxt] = useState<string>("")
  const [suggestionShow, setSuggestionShow] = useState<boolean>(false)
  const [searchState, setSearchState] = useState<boolean>(true)


  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value: string = e.currentTarget.value
    setSearchState(true)
    setSearchTxt(value)
    if (value) {
      setSuggestionShow(true)
    } else {
      setSuggestionShow(false)
    }
  }

  const suggestClickHandler = (address: string) => {
    setSearchTxt(address)
    setSuggestionShow(false)
    setSearchState(false)
  }

  return (
    <>
      <div className={styles.searchContainer}>
        <SearchHeader title1="Search for an address" />
        <div className={styles.formContainer}>
          <input type="search" className={styles.searchInput} placeholder="Pickup location" value={searchTxt} onChange={handleSearchChange} />
          <img src={searchState ? Search : Check} alt="search" className={styles.searchImg} />
          {
            suggestionShow &&
            <ul className={styles.suggestions}>
              <Suggestions address="text1" clickHandler={suggestClickHandler} />
              <Suggestions address="text3" clickHandler={suggestClickHandler} />
              <Suggestions address="text2" clickHandler={suggestClickHandler} />
            </ul>
          }
        </div>
      </div>
      <Results />
    </>
  )
}