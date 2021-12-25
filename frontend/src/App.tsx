import { useQuery } from '@apollo/client'
import { FC } from 'react'
import { helloWorldQuery } from './queries'
import { SearchView } from './views'

export const App: FC = () => {
  const { data } = useQuery<{ helloWorld: string }>(helloWorldQuery)
  return (
    // <div>{data?.helloWorld}</div>
    <div className='app-container'>
      <SearchView />
    </div>
  )
}
