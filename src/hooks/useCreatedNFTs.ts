import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { CREATED_NFTS_SETTINGS } from '../types/nftsCreatedTypes'
import { NFTS_FOR_CONTRACT, NFTS_INFO } from '../types/nftsTypes'
import { getNFTMetadataBatch } from '../api/apiAlchemy'

type RETURN_TYPE = [NFTS_INFO[], boolean, string]
type OBSERVER = null | IntersectionObserver
type TRACKED_REF = MutableRefObject<HTMLDivElement | null>

const useCreatedNFTs = (settings: CREATED_NFTS_SETTINGS, trackedRef: TRACKED_REF): RETURN_TYPE => {
  const [nfts, setNFTs] = useState<NFTS_INFO[]>([])
  const [isError, setIsError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const observerRef = useRef<OBSERVER>(null)
  const { address, randomStartTokens } = settings

  const tokens = randomStartTokens.map(token => ({
    contractAddress: address,
    tokenId: token,
  }))

  useEffect(() => {
    setIsLoading(() => true)

    getNFTMetadataBatch<NFTS_FOR_CONTRACT>(tokens)
      .then(nfts => {
        const collectedNFTs = collectingNFTs(nfts)
        setNFTs(() => collectedNFTs)
      })
      .catch(error => setIsError(() => String(error)))
      .finally(() => setIsLoading(() => false))
  }, [])

  useEffect(() => {
    if (!nfts.length) return

    observerRef.current = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting && !isLoading) {
          setIsLoading(() => true)

          getNFTMetadataBatch<NFTS_FOR_CONTRACT>(tokens)
            .then(nfts => {
              const collectedNFTs = collectingNFTs(nfts)
              setNFTs(prevNFTs => [...prevNFTs, ...collectedNFTs])
            })
            .catch(error => setIsError(() => String(error)))
            .finally(() => setIsLoading(() => false))
          observer.unobserve(entry.target)
        }
      }
      // { rootMargin: '900px' }
    )

    trackedRef.current && observerRef.current.observe(trackedRef.current)

    return () => {
      if (trackedRef.current) {
        observerRef.current?.unobserve(trackedRef.current)
      }
    }
  }, [nfts])

  return [nfts, isLoading, isError]
}

function collectingNFTs(arrayNFTs: NFTS_FOR_CONTRACT[]) {
  return arrayNFTs.reduce((acc: NFTS_INFO[], nft) => {
    const image =
      nft.image.cachedUrl ?? nft.image.thumbnailUrl ?? nft.image.pngUrl ?? nft.image.originalUrl

    const nftInfo = {
      id: nft.contract.address,
      tokenId: nft.tokenId,
      image,
      name: nft.name,
      collectionName: nft.contract?.name,
      logo: nft.contract.openSeaMetadata?.imageUrl,
      tokenType: nft.contract?.tokenType,
      priceValue: nft.contract.openSeaMetadata?.floorPrice,
      totalSupply: nft.contract?.totalSupply,
    }

    image && acc.push(nftInfo)
    return acc
  }, [])
}

export default useCreatedNFTs
