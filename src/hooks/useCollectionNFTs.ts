import { useEffect, useRef, useState } from 'react'

import { OBSERVER, REF, RETURN_HOOK } from './types'
import { AlchemyAPI } from '../api'
import { NFT_SHOWCASE } from '../types/componentsTypes/nftsTypes'
import { NFT_METADATA } from '../types/apiTypes/alchemyTypes'

type RETURN = RETURN_HOOK<NFT_SHOWCASE[]>

const useCollectionNFTs = (address: string, tokenIds: number[], trackedRef: REF): RETURN => {
  const [nfts, setNFTs] = useState<NFT_SHOWCASE[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const observerRef = useRef<OBSERVER>(null)

  const tokens = tokenIds.map(id => ({
    contractAddress: address,
    tokenId: String(id),
  }))

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

  useEffect(() => {
    if (!nfts.length) return

    const tracked = trackedRef.current

    observerRef.current = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting && !isLoading) {
        observer.unobserve(entry.target)
        setIsLoading(() => true)

        AlchemyAPI.getNFTMetadataBatch(tokens)
          .then(({ nfts }) => {
            const collectNFTs = collectingNFTs(nfts)
            setNFTs(prevNFTs => [...prevNFTs, ...collectNFTs])
            setError(() => '')
          })
          .catch(error => setError(() => String(error)))
          .finally(() => setIsLoading(() => false))
      }
    })

    tracked && observerRef.current.observe(tracked)

    return () => {
      if (tracked) observerRef.current?.unobserve(tracked)
    }
  }, [nfts])

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
        collectionName: nft.collection.name ?? nft.contract.openSeaMetadata.collectionName,
        floorPriceValue: nft.contract.openSeaMetadata.floorPrice,
        logoUrl: nft.contract.openSeaMetadata.imageUrl ?? nft.contract.openSeaMetadata.externalUrl,
        nftImageUrl,
        nftName: nft.name ?? nft.raw.metadata.name,
        tokenType: nft.tokenType,
      })
    return acc
  }, [])
}

export default useCollectionNFTs
