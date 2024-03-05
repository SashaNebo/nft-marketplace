import { FC } from 'react'

import cn from './Marketplace.module.scss'

const MarketplaceNoNFTs: FC = () => {
  return (
    <div className='container'>
      <div className={cn['no-nfts']}>
        <h3 className='text-work-h3'>No NFTs found</h3>
        <p className='text-work-body'>
          We couldn't find any NFTs matching your query. Try another query
        </p>
      </div>
    </div>
  )
}

export default MarketplaceNoNFTs
