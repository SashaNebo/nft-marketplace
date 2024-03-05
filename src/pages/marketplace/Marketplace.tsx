import { FC, useEffect, useRef, useState } from 'react'

import cn from './Marketplace.module.scss'
import MarketplaceTop from './MarketplaceTop'
import { spritePath } from '../../helpers/imgPath'
import useMarketplace from '../../hooks/useMarketplace'
import NotFound from '../../components/notFound/NotFound'
import MarketplaceTabs from './MarketplaceTabs'
import Nfts from '../../components/nfts/Nfts'
import MarketplaceNoNFTs from './MarketplaceNoNFTs'
import { getSetting } from './additional'

const Marketplace: FC = () => {
  useEffect(() => window.scroll(0, 0), [])
  const trackedRef = useRef<HTMLDivElement | null>(null)
  const [inputValue, setInputValue] = useState('')
  const setting = getSetting()

  const [nfts, isLoading, error] = useMarketplace(setting, trackedRef, inputValue)

  if (error) return <NotFound />

  return (
    <main className={cn['marketplace']}>
      <MarketplaceTop inputValue={inputValue} setInputValue={setInputValue} />

      <div className={cn['devider']}>
        <svg className={cn['devider__icon']}>
          <use href={`${spritePath}#line`}></use>
        </svg>
      </div>

      <div className='container'>
        <MarketplaceTabs nftsLength={nfts.length} />
      </div>

      <div className={cn['marketplace__nfts']}>
        <Nfts nfts={nfts} isLoading={isLoading} errorMessage={error} bg='dark' />
        {!nfts.length && !isLoading && <MarketplaceNoNFTs />}
        <div ref={trackedRef}></div>
      </div>
    </main>
  )
}

export default Marketplace
