import { useEffect, useRef, useState } from 'react'

import { SETTING } from '../pages/marketplace/additional'
import { NFT_SHOWCASE } from '../types/componentsTypes/nftsTypes'
import { OBSERVER, REF, RETURN_HOOK } from './types'
import { AlchemyAPI, RaribleAPI } from '../api'
import { NFT_METADATA } from '../types/apiTypes/alchemyTypes'

type RETURN = RETURN_HOOK<NFT_SHOWCASE[]>

const useMarketplace = (setting: SETTING, trackedRef: REF, inputValue: string): RETURN => {
  const [nfts, setNFTs] = useState<NFT_SHOWCASE[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [addressesVolume, setAddressesVolume] = useState<string[]>([])

  const observerRef = useRef<OBSERVER>(null)
  const { period, addressesLimit, delay, nftsStartTokens, addressesIndexes } = setting

  useEffect(() => {
    setIsLoading(() => true)

    const timeout = setTimeout(async () => {
      try {
        const { result } = await RaribleAPI.getNFTCollectionsvolume(period, addressesLimit)
        setAddressesVolume(() => result.map(({ id }) => id.split(':')[1]))
      } catch (error) {
        setError(() => String(error))
        setIsLoading(() => false)
      }
    }, 0)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!addressesVolume.length || inputValue) return

    setNFTs(() => [])
    setIsLoading(() => true)
    collectingRandomNFTs()
  }, [addressesVolume, inputValue])

  useEffect(() => {
    if (!inputValue) return

    setNFTs(() => [])
    setIsLoading(() => true)

    const timeout = setTimeout(async () => {
      try {
        const { contracts } = await AlchemyAPI.searchContractMetadata(inputValue)
        const address = contracts.length ? contracts[0].address : inputValue
        collectingSearchNFTs(address, 30)
      } catch (error) {
        setNFTs(() => [])
        setIsLoading(() => false)
      }
    }, delay)
    return () => clearTimeout(timeout)
  }, [inputValue])

  useEffect(() => {
    if (!nfts.length) return
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
          setIsLoading(() => true)
          if (!inputValue) return collectingRandomNFTs()

          if (inputValue) {
            const startToken = +nfts[nfts.length - 1].tokenId + 1
            collectingSearchNFTs(nfts[0].address, 30, startToken)
          }
        }
      },
      { rootMargin: '1500px' }
    )

    trackedRef.current && observerRef.current.observe(trackedRef.current)

    return () => {
      if (trackedRef.current) {
        observerRef?.current?.unobserve(trackedRef.current)
      }
    }
  }, [addressesVolume, nfts, inputValue])

  async function collectingRandomNFTs() {
    const tokens: { contractAddress: string; tokenId: string }[] = addressesIndexes.map(
      (addressId, i) => ({
        contractAddress: addressesVolume[addressId],
        tokenId: nftsStartTokens[i] + '',
      })
    )

    try {
      const { nfts } = await AlchemyAPI.getNFTMetadataBatch(tokens)
      setNFTs(prevNFTs => [...prevNFTs, ...collectionNFTs(nfts)])
    } catch (error) {
      setNFTs(() => [])
      setError(() => String(error))
    } finally {
      setIsLoading(() => false)
    }
  }

  async function collectingSearchNFTs(query: string, limit: number, startToken = 0) {
    try {
      const { nfts } = await AlchemyAPI.getNFTsForContract(query, startToken, limit)
      const collectedNFTs = collectionNFTs(nfts)
      startToken
        ? setNFTs(prevNFTs => [...prevNFTs, ...collectedNFTs])
        : setNFTs(() => collectedNFTs)
    } catch (error) {
      setNFTs(() => [])
    } finally {
      setIsLoading(() => false)
    }
  }

  return [nfts, isLoading, error]
}

const collectionNFTs = (nfts: NFT_METADATA[]) =>
  nfts.reduce((acc: NFT_SHOWCASE[], nft) => {
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

export default useMarketplace
