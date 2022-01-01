import { ReactElement, useCallback, useState } from 'react'
import { Check, Search } from '../../../assets/images'
import { Results, Suggestions, SearchHeader } from '../../components'
import debounce from 'lodash.debounce'
import styles from './searchView.module.css'
import { AddressSuggestion, getSuggestions } from '../../addresses'
import { useQuery } from '@apollo/client'
import { GET_NEAREST_DRIVERS } from '../../queries'

export default function SearchView (): ReactElement {
  const [searchTxt, setSearchTxt] = useState<string>('')
  const [suggestionShow, setSuggestionShow] = useState<boolean>(false)
  const [searchState, setSearchState] = useState<boolean>(true)
  const [suggestionsList, setSuggestionsList] = useState<AddressSuggestion[]>([])
  const { data } = useQuery(GET_NEAREST_DRIVERS, { variables: { lon: 28.1988, lat: 50.5847 } })
  // const [ getDrivers, { loading, data }] = useLazyQuery(GET_NEAREST_DRIVERS);

  const callback = useCallback(debounce((value: string): void => {
    getSuggestions(value).then((addresses): void => setSuggestionsList(addresses)).catch(err => console.log(err))
  }, 500), [])

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget?.value
    setSearchState(true)
    setSearchTxt(value)
    if (value.length > 0) {
      callback(value)
      setSuggestionShow(true)
    } else {
      setSuggestionShow(false)
    }
  }

  const suggestClickHandler = (address: AddressSuggestion): void => {
    setSearchTxt(address.label)
    setSuggestionShow(false)
    setSearchState(false)
    // getDrivers({variables:{lon: 28.1988, lat: 50.5847}})
  }

  return (
    <>
      <div className={styles.searchContainer}>
        <SearchHeader title1='Search for an address' />
        <div className={styles.formContainer}>
          <input type='search' className={styles.searchInput} placeholder='Pickup location' value={searchTxt} onChange={handleSearchChange} />
          <img src={searchState ? Search : Check} alt='search' className={styles.searchImg} />
          {
            suggestionShow &&
              <ul className={styles.suggestions}>
                {
                  suggestionsList.map((row, index) =>
                    <Suggestions address={row} clickHandler={suggestClickHandler} key={index} />
                  )
                }
              </ul>
          }
        </div>
      </div>
      {data !== undefined && <Results data={data.getNearestDrivers} />}
    </>
  )
}
