import { FC } from 'react'
import TopCollections from '../../components/topCollections/TopCollections'
import Hero from '../../components/hero/Hero'

const Home: FC = () => {
  return (
    <div className='container'>
      <Hero />
      <TopCollections />
    </div>
  )
}

export default Home
