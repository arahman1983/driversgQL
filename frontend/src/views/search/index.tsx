import { useCallback, useState } from "react";
import { Check, Search } from "../../../assets/images";
import { Results, Suggestions, SearchHeader } from "../../components";
import debounce from 'lodash.debounce'
import styles from './searchView.module.css'
import {AddressSuggestion, getSuggestions} from '../../addresses'
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_NEAREST_DRIVERS } from '../../queries'

export default function SearchView() {
  const [searchTxt, setSearchTxt] = useState<string>("")
  const [suggestionShow, setSuggestionShow] = useState<boolean>(false)
  const [searchState, setSearchState] = useState<boolean>(true)
  const [suggestionsList, setSuggestionsList] = useState<AddressSuggestion[]>([])
  const { data } = useQuery(GET_NEAREST_DRIVERS, {variables:{lon: 28.1988, lat: 50.5847}})
  // const [ getDrivers, { loading, data }] = useLazyQuery(GET_NEAREST_DRIVERS);

  const callback = useCallback(debounce((value:string) => {
    getSuggestions(value).then(addresses => setSuggestionsList(addresses))
    }, 500), []);


    data && console.log('data :>> ', data);
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
    // getDrivers({variables:{lon: 28.1988, lat: 50.5847}})
    
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
      {data && <Results data = {data.getNearestDrivers} />}
    </>
  )
}