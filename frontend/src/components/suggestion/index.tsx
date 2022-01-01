import { ReactElement } from 'react'
import { AddressSuggestion } from '../../addresses'

interface Props {
  address: AddressSuggestion
  clickHandler: (address: AddressSuggestion) => void
}

export default function Suggestions ({ address, clickHandler }: Props): ReactElement {
  return (
    <li onClick={() => clickHandler(address)}>
      {address.label}
    </li>
  )
}
