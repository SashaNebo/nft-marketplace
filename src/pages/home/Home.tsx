import { FC } from 'react'

import TopCollections from '../../components/topCollections/TopCollections'
import Hero from '../../components/hero/Hero'
import Trending from '../../components/trending/Trending'
import Discover from '../../components/discover/Discover'

const Home: FC = () => {
  return (
    <div className='container'>
      <Hero />
      <Trending />
      <TopCollections />
      <Discover />
    </div>
  )
}

export default Home
