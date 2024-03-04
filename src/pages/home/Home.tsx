import { FC } from 'react'
import Hero from '../../components/hero/Hero'
import Trending from '../../components/trending/Trending'
import TopCreators from '../../components/topCollections/TopCollections'
import Categories from '../../components/categories/Categories'
import Discover from '../../components/discover/Discover'
import HowItWorks from '../../components/howItWorks/HowItWorks'
import Join from '../../components/join/Join'

const Home: FC = () => {
  return (
    <>
      <div className='container'>
        <Hero />
        <Trending />
        <TopCreators />
        <Categories />
        <Discover />
        <HowItWorks />
        <Join />
      </div>
    </>
  )
}

export default Home
