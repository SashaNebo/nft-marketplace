import { useEffect, useState } from 'react'
import { getNFTMetadata } from '../api/apiAlchemy'
import { NFT_INFO, NFT_META_DATA } from '../types/typeNFT'

type RETURN = [NFT_INFO | null, boolean, string]
const useNFT = (paramID: string): RETURN => {
  const [isError, setIsError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [nftInfo, setNftInfo] = useState<NFT_INFO | null>(null)
  const [address, tokenID] = paramID.split(':')

  useEffect(() => {
    setIsLoading(() => true)
    getNFTMetadata<NFT_META_DATA>(address, tokenID)
      .then(nft => {
        const info: NFT_INFO = {
          id: nft.contract.address,
          nameCollection: nft.collection.name ?? nft.contract.name,
          nameNFT: nft.name,
          logoUrl: nft.contract.openSeaMetadata.imageUrl,
          imageUrl:
            nft.image.cachedUrl ??
            nft.image.originalUrl ??
            nft.image.pngUrl ??
            nft.image.thumbnailUrl,
          description: nft.contract.openSeaMetadata.description,
          discordUrl: nft.contract.openSeaMetadata.discordUrl,
          twitterUsername: nft.contract.openSeaMetadata.twitterUsername,
          floorPrice: nft.contract.openSeaMetadata.floorPrice,
          mintTimeStamp: nft.mint.timestamp,
        }

        setNftInfo(() => info)
      })
      .catch(error => setIsError(() => String(error)))
      .finally(() => setIsLoading(() => false))
  }, [paramID])

  return [nftInfo, isLoading, isError]
}

export default useNFT
