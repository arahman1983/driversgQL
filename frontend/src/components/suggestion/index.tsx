// import styles from './suggestions.module.css'

type Props = {
  address: string,
  clickHandler: (address: string) => void
}

export default function Suggestions({ address, clickHandler }: Props) {
  return (
    <li onClick={() => clickHandler(address)}>
      {address}
    </li>
  )
}