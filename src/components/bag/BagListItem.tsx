import { FC } from 'react'

import cn from './Bag.module.scss'
import Button from '../UI/buttons/Button'
import { ACCOUNT_NFTS } from '../../types/accountTypes/accountTypes'
import { Link } from 'react-router-dom'
import { rootRoute } from '../../router/routes'

interface PROPS {
  nft: ACCOUNT_NFTS
  setAccountNFTs: (workCase: "remove" | "add" | "clearAll", nft: ACCOUNT_NFTS) => void
}

const BagListItem: FC<PROPS> = ({ nft, setAccountNFTs }) => {

  return (
    <div className={cn['item']}>
      <Link className={cn['item__picture']} to={`${rootRoute}/nft/${nft.address}:${nft.tokenId}`}>
        <img src={nft.nftImageUrl} alt='' />
      </Link>
      <div className={cn['item__nftName']}>{nft.nftName}</div>
      <div className={cn['item__collectionName']}>{nft.collectionName}</div>
      <div className={cn['item__price']}>{nft.floorPriceValue} ETH</div>

      <Button
        onClick={() => setAccountNFTs('remove', nft)}
        className={cn['item__button']}
        variant='secondary'
        text='remove'
        size='lg'
      />
    </div>
  )
}

export { BagListItem }