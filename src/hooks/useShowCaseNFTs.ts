import { useEffect, useState } from 'react'

import { NFT_METADATA, TOKEN } from '../types/apiTypes/alchemyTypes'
import { NFT_SHOWCASE } from '../types/componentsTypes/nftsTypes'
import { RETURN_HOOK } from './types'
import { AlchemyAPI } from '../api'

type RETURN = RETURN_HOOK<NFT_SHOWCASE[]>

const useShowCaseNFTs = (tokens: TOKEN[]): RETURN => {
  const [nfts, setNFTs] = useState<NFT_SHOWCASE[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setIsLoading(() => true)

    AlchemyAPI.getNFTMetadataBatch(tokens)
      .then(({ nfts }) => {
        const collectNFTs = collectingNFTs(nfts)
        setNFTs(() => collectNFTs)
      })
      .catch(error => setError(() => String(error)))
      .finally(() => setIsLoading(() => false))
  }, [])

  return [nfts, isLoading, error]
}

function collectingNFTs(arrayNFTs: NFT_METADATA[]): NFT_SHOWCASE[] {
  return arrayNFTs.reduce((acc: NFT_SHOWCASE[], nft) => {
    const nftImageUrl =
      nft.image.cachedUrl ?? nft.image.pngUrl ?? nft.image.originalUrl ?? nft.image.thumbnailUrl

    nftImageUrl &&
      acc.push({
        address: nft.contract.address,
        tokenId: nft.tokenId,
        collectionName: nft.collection?.name ?? nft.contract.openSeaMetadata.collectionName,
        floorPriceValue: nft.contract.openSeaMetadata.floorPrice,
        logoUrl: nft.contract.openSeaMetadata.imageUrl ?? nft.contract.openSeaMetadata.externalUrl,
        nftImageUrl,
        nftName: nft?.name ?? nft.raw.metadata?.name,
        tokenType: nft.tokenType,
      })
    return acc
  }, [])
}

export default useShowCaseNFTs
