import { useEffect, useState } from 'react'

import { NFT } from '../types/componentsTypes/nftsTypes'
import { RETURN_HOOK } from './types'
import { AlchemyAPI } from '../api'

type RETURN = RETURN_HOOK<NFT>

const useNFT = (paramID: string): RETURN => {
  const [nft, setNft] = useState<NFT>({
    address: '',
    tokenId: '',
    collectionName: null,
    description: null,
    discordUrl: null,
    floorPriceValue: null,
    logoUrl: null,
    nftImageUrl: null,
    nftName: null,
    twitterUsername: null,
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [address, tokenID] = paramID.split(':')

  useEffect(() => {
    setIsLoading(() => true)

    AlchemyAPI.getNFTMetadata(address, tokenID)
      .then(nft => {
        setNft(() => ({
          address: nft.contract.address,
          tokenId: nft.tokenId,
          collectionName: nft.collection.name ?? nft.contract.openSeaMetadata.collectionName,
          description: nft.contract.openSeaMetadata.description,
          discordUrl: nft.contract.openSeaMetadata.discordUrl,
          twitterUsername: nft.contract.openSeaMetadata.twitterUsername,
          floorPriceValue: nft.contract.openSeaMetadata.floorPrice,
          nftName: nft.name ?? nft.raw.metadata.name,
          logoUrl:
            nft.contract.openSeaMetadata.imageUrl ?? nft.contract.openSeaMetadata.externalUrl,
          nftImageUrl:
            nft.image.cachedUrl ??
            nft.image.originalUrl ??
            nft.image.pngUrl ??
            nft.image.thumbnailUrl,
        }))
      })
      .catch(error => setError(() => String(error)))
      .finally(() => setIsLoading(() => false))
  }, [])

  return [nft, isLoading, error]
}

export default useNFT
