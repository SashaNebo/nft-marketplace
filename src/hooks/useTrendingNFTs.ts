import { useEffect, useState } from 'react'

import { TRENDING_NFTS, trendingPH } from '../components/trending/additional'
import { AlchemyAPI } from '../api'
import { TOKEN } from '../types/apiTypes/alchemyTypes'

type RETURN = [TRENDING_NFTS[], boolean]

const useTrendingNFTs = (tokensArray: TOKEN[][]): RETURN => {
  const [nfts, setNFTs] = useState<TRENDING_NFTS[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(() => true)
    collectingNFTs()
  }, [])

  async function collectingNFTs() {
    const promises = await Promise.allSettled(
      tokensArray.map(async tokens => {
        return (await AlchemyAPI.getNFTMetadataBatch(tokens)).nfts
      })
    )

    const trendingNFTs: TRENDING_NFTS[] = promises.reduce((acc: TRENDING_NFTS[], promise) => {
      if (promise.status === 'fulfilled') {
        const collect = promise.value.reduce(
          (accObj: Partial<TRENDING_NFTS>, nft) => {
            const nftImageUrl =
              nft.image.cachedUrl ??
              nft.image.pngUrl ??
              nft.image.originalUrl ??
              nft.image.thumbnailUrl

            accObj.address = nft.contract.address
            accObj.collectionName = nft.contract.openSeaMetadata?.collectionName ?? nft?.name
            accObj.logoUrl =
              nft.contract.openSeaMetadata.imageUrl ?? nft.contract.openSeaMetadata.externalUrl
            accObj.symbol = nft.contract.symbol
            accObj.tokenIds?.push(nft.tokenId)
            accObj.nftImages?.push(nftImageUrl)
            return accObj
          },
          {
            nftImages: [],
            tokenIds: [],
          }
        )
        acc.push(collect as TRENDING_NFTS)
      } else acc.push(trendingPH)
      return acc
    }, [])

    setNFTs(() => trendingNFTs)
    setIsLoading(() => false)
  }
  return [nfts, isLoading]
}

export default useTrendingNFTs
