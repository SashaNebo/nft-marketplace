import { FC } from 'react'

import cn from './Discover.module.scss'
import DiscoverNFTs from './DiscoverNFTs'
import DiscoverHeader from './DiscoverHeader'

const Discover: FC = () => {
  return (
    <section className={cn['discover']}>
      <DiscoverHeader />
      <DiscoverNFTs />
    </section>
  )
}

export default Discover
