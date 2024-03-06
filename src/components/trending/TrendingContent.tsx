import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './Trending.module.scss'
import { TRENDING_NFTS } from './additional'
import Author from '../UI/author/Author'
import { img_PH } from '../../helpers/imgPath'
import { rootRoute } from '../../router/routes'

const TrendingContent: FC<{ nfts: TRENDING_NFTS[] }> = ({ nfts }) => {
  return (
    <div className={cn['trending__content']}>
      {nfts.map(({ address, collectionName, nftImages, tokenIds, logoUrl, symbol }, i) => (
        <div key={address + i} className={cn['collection-card']}>
          <div className={cn['collection-card__gallery']}>
            {tokenIds.map((tokenId, i) => (
              <div className={[cn[`grid-${i + 1}`], 'animation-scale'].join(' ')} key={tokenId}>
                <Link to={`${rootRoute}/nft/${address}:${tokenId}`}>
                  <img src={nftImages[i] || ''} alt='' />
                </Link>
              </div>
            ))}

            <Link
              className={[cn['grid-4'], 'animation-scale'].join(' ')}
              to={`${rootRoute}/collection/${address}`}>
              <h5 className='text-space-h5'>100+</h5>
            </Link>
          </div>

          <Author
            id={address}
            title={symbol || 'NFT'}
            nickName={collectionName || 'Collection'}
            avatarUrl={logoUrl || img_PH.logo_PH}
          />
        </div>
      ))}
    </div>
  )
}

export default TrendingContent
