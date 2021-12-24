import { useQuery } from '@apollo/client'
import { FC } from 'react'
import { helloWorldQuery } from './queries'

export const App: FC = () => {
  const { data } = useQuery<{ helloWorld: string }>(helloWorldQuery)
  return (
    <div>{data?.helloWorld}</div>
  )
}
