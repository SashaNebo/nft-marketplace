import { FC } from 'react'
import cn from './Nfts.module.scss'
import Creator from '../UI/author/Author'
import { getNFTsInfo } from '../../utils/nftsUtils'
import { NFTS_INFO } from '../../types/nftsTypes'
import { Link } from 'react-router-dom'

type NFtsListCardProps = {
  bg?: 'dark' | 'gray'
  nft: NFTS_INFO
}

const NFtsListCard: FC<NFtsListCardProps> = ({ bg, nft }) => {
  const { id, image, collectionName, name, logo, priceValue, tokenType, tokenId } = getNFTsInfo(nft)

  return (
    <div className={[cn['card'], cn[`${bg}`]].join(' ')}>
      <Link to={`/nft/${id}:${tokenId}`} target='_blank'>
        <div className={cn['card__picture']}>
          {/* <img src={image ?? ''} /> */}
          <object data={image} type='image/jpg' className={cn['card__picture-object']}></object>
        </div>
      </Link>

      <div className={cn['card__info']}>
        <Creator id={id} title={name} nickName={collectionName} avatarUrl={logo} />

        <div className={cn['card__info-values']}>
          <div className={cn['card__info-value']}>
            <span className='text-space-caption'>Price</span>
            <p className='text-space-body'>{priceValue} ETH</p>
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
