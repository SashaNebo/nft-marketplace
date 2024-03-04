import { FC, useRef } from 'react'
import useCollectionNFTs from '../../hooks/useCollectionNFTs'

import cn from './Collection.module.scss'
import { getRandomNumbers } from '../../helpers/someHelper'
import Nfts from '../../components/nfts/Nfts'

const CollectionNFTs: FC<{ address: string }> = ({ address }) => {
  const trackedRef = useRef<HTMLDivElement | null>(null)
  const tokenIds = getRandomNumbers(0, 5000, 30)

  const [nfts, isLoading, error] = useCollectionNFTs(address, tokenIds, trackedRef)

  return (
    <div className={cn['collection__nfts']}>
      <Nfts nfts={nfts} isLoading={isLoading} errorMessage={error} />
      <div ref={trackedRef}></div>
    </div>
  )
}

export default CollectionNFTs
