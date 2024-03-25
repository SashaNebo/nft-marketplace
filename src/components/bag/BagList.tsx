import { FC } from 'react'

import cn from './Bag.module.scss'
import { BagListItem } from './BagListItem'
import { useAccountNFTsState } from '../../hooks/useAccountNFTs'

const BagList: FC = () => {
  const { accountNFTs, setAccountNFTs } = useAccountNFTsState()

  return (
    <div className={cn['bag__list']}>
      {accountNFTs.map((nft) => (
        <BagListItem setAccountNFTs={setAccountNFTs} nft={nft} key={nft.address + nft.tokenId} />
      ))}
    </div>
  )
}

export { BagList }