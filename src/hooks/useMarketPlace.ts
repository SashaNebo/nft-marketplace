import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { NFTS_FOR_CONTRACT, NFTS_INFO, NFTS_SETTINGS } from '../types/nftsTypes'
import { COLLECTIONS_VOLUME } from '../types/collectionsTypes'
import { getNFTCollectionsVolume } from '../api/apiRarible'
import { getNFTMetadataBatch, getNFTsForContract, searchContractMetadata } from '../api/apiAlchemy'

type RETURN_TYPE = [NFTS_INFO[], boolean, string]
type OBSERVER = null | IntersectionObserver
type TRACKED_REF = MutableRefObject<HTMLDivElement | null>
type CB_NFTS = React.Dispatch<React.SetStateAction<NFTS_INFO[]>>
type CB_LOADING = React.Dispatch<React.SetStateAction<boolean>>

const useMarketPlace = (
  settings: NFTS_SETTINGS,
  trackedRef: TRACKED_REF,
  inputValue: string
): RETURN_TYPE => {
  const [nfts, setNFTs] = useState<NFTS_INFO[]>([])
  const [isError, setIsError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [addressesVolume, setAddressesVolume] = useState<string[]>([])

  const observerRef = useRef<OBSERVER>(null)
  const { period, addressesLimit, delay } = settings

  useEffect(() => {
    setIsLoading(() => true)
    const requestAddresses = async () => {
      try {
        const { result } = await getNFTCollectionsVolume<COLLECTIONS_VOLUME>(addressesLimit, period)
        const addressesList = result.map(({ id }) => id.split(':')[1])
        setAddressesVolume(() => addressesList)
      } catch (error) {
        setIsError(() => String(error))
        setIsLoading(() => false)
      }
    }

    requestAddresses()
  }, [])

  useEffect(() => {
    if (!addressesVolume.length || inputValue) return

    setNFTs(() => [])
    setIsLoading(() => true)

    const timeout = setTimeout(() => {
      toCollectingRandomNFTs(settings, addressesVolume, setNFTs, setIsLoading)
    }, delay)

    return () => clearTimeout(timeout)
  }, [addressesVolume, inputValue])

  useEffect(() => {
    if (!inputValue) return

    setNFTs(() => [])
    setIsLoading(() => true)

    const timeout = setTimeout(() => {
      searchingNFTs(inputValue, 30, setNFTs, setIsLoading)
    }, delay)

    return () => clearTimeout(timeout)
  }, [inputValue])

  useEffect(() => {
    if (!nfts.length) return
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          if (inputValue) {
            setIsLoading(() => true)
            observer.unobserve(entry.target)
            const startToken = +nfts[nfts.length - 1].tokenId + 1
            toCollectingSearchingNFTs(setNFTs, setIsLoading, nfts[0].id, 30, startToken)
          }

          if (!inputValue) {
            setIsLoading(() => true)
            observer.unobserve(entry.target)
            toCollectingRandomNFTs(settings, addressesVolume, setNFTs, setIsLoading)
          }
        }
      },
      { rootMargin: '1350px' }
    )

    trackedRef.current && observerRef.current.observe(trackedRef.current)

    return () => {
      if (trackedRef.current) {
        observerRef?.current?.unobserve(trackedRef.current)
      }
    }
  }, [addressesVolume, nfts, inputValue])

  return [nfts, isLoading, isError]
}

async function toCollectingRandomNFTs(
  settings: NFTS_SETTINGS,
  addressesList: string[],
  setNFTs: CB_NFTS,
  setIsLoading: CB_LOADING
) {
  const { addressesIndexes, nftsStartTokens } = settings

  const tokens = addressesIndexes.map((addressId, i) => ({
    contractAddress: addressesList[addressId],
    tokenId: nftsStartTokens[i],
  }))

  try {
    const nftMetadataBatch = await getNFTMetadataBatch<NFTS_FOR_CONTRACT>(tokens)
    const collectedNFTs = collectingNFTs(nftMetadataBatch)
    setNFTs(prevNFTs => [...prevNFTs, ...collectedNFTs])
    setIsLoading(() => false)
  } catch (error) {
    setNFTs(() => [])
    setIsLoading(() => false)
  }
}

async function searchingNFTs(
  query: string,
  limit: number,
  setNFTs: CB_NFTS,
  setIsLoading: CB_LOADING
) {
  try {
    const contracts = await searchContractMetadata<{ address: string }>(query)
    const address = contracts.length ? contracts[0].address : query
    toCollectingSearchingNFTs(setNFTs, setIsLoading, address, limit)
  } catch (error) {
    setNFTs(() => [])
    setIsLoading(() => false)
  }
}

async function toCollectingSearchingNFTs(
  setNFTs: CB_NFTS,
  setIsLoading: CB_LOADING,
  query: string,
  limit: number,
  tokenStart?: number
) {
  try {
    const nfts = await getNFTsForContract<NFTS_FOR_CONTRACT>(query, limit, tokenStart)
    const collectedNFTs = collectingNFTs(nfts)
    tokenStart ? setNFTs(prevNFTs => [...prevNFTs, ...collectedNFTs]) : setNFTs(() => collectedNFTs)
    setIsLoading(() => false)
  } catch (error) {
    setNFTs(() => [])
    setIsLoading(() => false)
  }
}

function collectingNFTs(arrayNFTs: NFTS_FOR_CONTRACT[]) {
  return arrayNFTs.reduce((acc: NFTS_INFO[], nft) => {
    const image =
      nft.image.thumbnailUrl ?? nft.image.cachedUrl ?? nft.image.pngUrl ?? nft.image.originalUrl

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

export default useMarketPlace
