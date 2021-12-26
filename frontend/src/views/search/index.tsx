import { useCallback, useState } from "react";
import { Check, Search } from "../../../assets/images";
import { Results, Suggestions, SearchHeader } from "../../components";
import debounce from 'lodash.debounce'
import styles from './searchView.module.css'
import {AddressSuggestion, getSuggestions} from '../../addresses'

export default function SearchView() {
  const [searchTxt, setSearchTxt] = useState<string>("")
  const [suggestionShow, setSuggestionShow] = useState<boolean>(false)
  const [searchState, setSearchState] = useState<boolean>(true)
  const [suggestionsList, setSuggestionsList] = useState<AddressSuggestion[]>([])

  const callback = useCallback(debounce((value:string) => {
    getSuggestions(value).then(addresses => setSuggestionsList(addresses))
    }, 500), []);

    const handleSearchChange =  (e: React.FormEvent<HTMLInputElement>) => {
      const value: string = e.currentTarget?.value
      setSearchState(true)
      setSearchTxt(value)
      if (value) {
        callback(value)
        setSuggestionShow(true)
      } else {
        setSuggestionShow(false)
      }
  }



  const suggestClickHandler = (address: AddressSuggestion) => {
    setSearchTxt(address.label)
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
              {
                suggestionsList.map((row, index) => 
                  <Suggestions address={row} clickHandler={suggestClickHandler} />
                )
              }
            </ul>
          }
        </div>
      </div>
      <Results />
    </>
  )
}