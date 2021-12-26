// import styles from './suggestions.module.css'
// import { useEffect } from "react"
import { AddressSuggestion } from "../../addresses"

type Props = {
  address: AddressSuggestion,
  clickHandler: (address: AddressSuggestion) => void
}

export default function Suggestions({ address, clickHandler }: Props) {
  
  return (
    <li onClick={() => clickHandler(address)}>
      {address.label}
    </li>
  )
}