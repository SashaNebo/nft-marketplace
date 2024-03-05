import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './Nfts.module.scss'
import Author from '../UI/author/Author'
import { NFT_SHOWCASE } from '../../types/componentsTypes/nftsTypes'
import { toCollectVerifiedData } from '../../utils/collectVerifiedData'
import { rootRoute } from '../../router/routes'

type NFtsListCardProps = {
  nft: NFT_SHOWCASE
  bg?: 'dark' | 'gray'
}

const NFtsListCard: FC<NFtsListCardProps> = ({ bg, nft }) => {
  const {
    address,
    nftImageUrl,
    collectionName,
    nftName,
    logoUrl,
    floorPriceValue,
    tokenId,
    tokenType,
  } = toCollectVerifiedData(nft)

  return (
    <div className={[cn['card'], cn[`${bg}`]].join(' ')}>
      <Link to={`${rootRoute}/nft/${address}:${tokenId}`}>
        <div className={cn['card__picture']}>
          <img src={nftImageUrl} className={cn['card__picture-img']} alt='' />
        </div>
      </Link>

      <div className={cn['card__info']}>
        <Author id={address} title={nftName} nickName={collectionName} avatarUrl={logoUrl} />

        <div className={cn['card__info-values']}>
          <div className={cn['card__info-value']}>
            <span className='text-space-caption'>Price</span>
            <p className='text-space-body'>{floorPriceValue} ETH</p>
          </div>

          <div className={cn['card__info-value']}>
            <span className='text-space-caption'>Token Type</span>
            <p className='text-space-body'>{tokenType}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFtsListCard
