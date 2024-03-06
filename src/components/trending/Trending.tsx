import { FC } from 'react'

import cn from './Trending.module.scss'
import { arrayTokens } from './additional'
import TrendingContent from './TrendingContent'
import useTrendingNFTs from '../../hooks/useTrendingNFTs'
import TrendingCardLoader from './TrendingCardLoader'

const Trending: FC = () => {
  const [nfts, isLoading] = useTrendingNFTs(arrayTokens)

  return (
    <section className={cn['trending']}>
      <h3 className='text-work-h3'>Trending Collection</h3>
      <h5 className={cn['trending__subtitle']}>Checkout our weekly updated trending collection.</h5>
      {isLoading ? <TrendingCardLoader /> : <TrendingContent nfts={nfts} />}
    </section>
  )
}

export default Trending
