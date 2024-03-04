import { FC } from 'react'

import cn from './Nfts.module.scss'
import NFtsListCard from './NFtsListCard'
import LoaderSmall from '../loader/LoaderSmall'
import ErrorMessage from '../error/ErrorMessage'
import { NFT_SHOWCASE } from '../../types/componentsTypes/nftsTypes'

type NFTsListProps = {
  nfts: NFT_SHOWCASE[]
  isLoading: boolean
  errorMessage: string
  bg?: 'dark' | 'gray'
}

const NftsList: FC<NFTsListProps> = ({ nfts, isLoading, errorMessage, bg }) => {
  return (
    <>
      <div className={cn['nfts-list']}>
        {nfts.map((nft, i) => (
          <NFtsListCard key={i} nft={nft} bg={bg} />
        ))}
      </div>

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      {isLoading && <LoaderSmall />}
    </>
  )
}

export default NftsList
