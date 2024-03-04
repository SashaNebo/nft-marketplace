import { FC, useRef } from 'react'

import cn from './NFT.module.scss'
import useCollectionNFTs from '../../hooks/useCollectionNFTs'
import { getRandomNumbers } from '../../helpers/someHelper'
import Nfts from '../../components/nfts/Nfts'

const NftMore: FC<{ paramID: string }> = ({ paramID }) => {
  const trackedRef = useRef<HTMLDivElement | null>(null)
  const tokenIds = getRandomNumbers(0, 5000, 30)
  const address = paramID.split(':')[0]

  const [nfts, isLoading, error] = useCollectionNFTs(address, tokenIds, trackedRef)

  return (
    <div className={cn['nft__more']}>
      <Nfts nfts={nfts} isLoading={isLoading} errorMessage={error} bg='gray' />
      <div ref={trackedRef}></div>
    </div>
  )
}

export default NftMore
