import { FC, useEffect, useRef, useState } from 'react'

import cn from './Marketplace.module.scss'
import { spritePath } from '../../helpers/pathIcons'
import Nfts from '../../components/nfts/Nfts'
import useMarketPlace from '../../hooks/useMarketPlace'
import NotFound from '../notFound/NotFound'
import { getRandomNumbers } from '../../utils/nftsUtils'
import { NFTS_SETTINGS } from '../../types/nftsTypes'
import { PERIOD } from '../../types/collectionsTypes'
import MarketplaceTop from './MarketplaceTop'
import MarketplaceTabs from './MarketplaceTabs'
import MarketplaceNoNFTs from './MarketplaceNoNFTs'

const Marketplace: FC = () => {
  const [inputValue, setInputValue] = useState('')
  const trackedRef = useRef<HTMLDivElement | null>(null)

  const settings: NFTS_SETTINGS = {
    period: PERIOD.mounth,
    delay: 500,
    addressesLimit: 200,
    addressesIndexes: getRandomNumbers(0, 200, 30),
    nftsStartTokens: getRandomNumbers(0, 1000, 30),
  }

  const [nfts, loading, error] = useMarketPlace(settings, trackedRef, inputValue)

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  if (error) return <NotFound />

  return (
    <main className={cn['marketplace']}>
      <MarketplaceTop inputValue={inputValue} setInputValue={setInputValue} />

      <div className={cn['devider']}>
        <svg className={cn['devider__icon']}>
          <use href={`${spritePath.buttonIcons}#line`}></use>
        </svg>
      </div>

      <div className='container'>
        <MarketplaceTabs nftsLength={nfts.length} />
      </div>

      <div className={cn['marketplace__nfts']}>
        <Nfts loading={loading} nfts={nfts} bg='dark' />
        {!nfts.length && !loading && <MarketplaceNoNFTs />}
        <div ref={trackedRef}></div>
      </div>
    </main>
  )
}

export default Marketplace
