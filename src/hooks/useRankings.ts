import { useEffect, useRef, useState } from 'react'

import { OBSERVER, REF, RETURN_HOOK } from './types'
import { RANKINGS, SETTING_RANKINGS } from '../types/componentsTypes/rankingsTypes'
import { NFT_COLLECTIONS_VOLUME, VOLUME_RESULT } from '../types/apiTypes/raribleTypes'
import { AlchemyAPI, RaribleAPI } from '../api'
import { CONTRACT_METADATA } from '../types/apiTypes/alchemyTypes'

type RETURN = RETURN_HOOK<RANKINGS[]>

const useRankings = (setting: SETTING_RANKINGS, trackedRef: REF): RETURN => {
  const [rankings, setRankings] = useState<RANKINGS[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const [collectionsVolume, setCollectionsVolume] = useState<NFT_COLLECTIONS_VOLUME>({
    continuation: '',
    result: [],
  })

  const observerRef = useRef<OBSERVER>(null)

  const { period, limit, delay } = setting
  const { continuation } = collectionsVolume

  useEffect(() => {
    setRankings(() => [])
    setError(() => '')
    setIsLoading(() => true)

    const timeout = setTimeout(async () => {
      try {
        const collVolume = await RaribleAPI.getNFTCollectionsvolume(period, limit)
        setCollectionsVolume(() => collVolume)
      } catch (error) {
        setError(() => String(error))
        setIsLoading(() => false)
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [period])

  useEffect(() => {
    if (!continuation) return

    const contractAddresses: string[] = collectionsVolume.result
      .filter(({ id }) => id.includes('0x'))
      .map(({ id }) => id.split(':')[1])

    const timeout = setTimeout(async () => {
      try {
        const { contracts } = await AlchemyAPI.getContractMetadataBatch(contractAddresses)
        const rankingsData = merging(collectionsVolume.result, contracts)
        setRankings(prevRankings => [...prevRankings, ...rankingsData])
      } catch (error) {
        setError(() => String(error))
        setRankings(() => [])
      } finally {
        setIsLoading(() => false)
      }
    }, 0)

    return () => clearTimeout(timeout)
  }, [collectionsVolume])

  useEffect(() => {
    if (!rankings.length) return

    const tracked = trackedRef.current

    observerRef.current = new IntersectionObserver(
      async ([entry], observer) => {
        if (!entry.isIntersecting) return

        observer.unobserve(entry.target)
        setIsLoading(() => true)

        try {
          const collVolume = await RaribleAPI.getNFTCollectionsvolume(period, limit, continuation)
          setCollectionsVolume(() => collVolume)
        } catch (error) {
          setError(() => String(error))
          setIsLoading(() => false)
        }
      },
      { rootMargin: '400px' }
    )

    tracked && observerRef.current.observe(tracked)

    return () => {
      if (tracked) observerRef.current?.unobserve(tracked)
    }
  }, [rankings])

  return [rankings, isLoading, error]
}

function merging(volumeResult: VOLUME_RESULT[], contracts: CONTRACT_METADATA[]) {
  return contracts.reduce((acc: RANKINGS[], contract, i) => {
    const vri = volumeResult[i]

    acc.push({
      address: contract.address,
      collectionName: contract.openSeaMetadata.collectionName,
      floorPricePercent: vri.floorPrice?.changePercent,
      floorPriceValue: vri.floorPrice?.value,
      logoUrl: contract.openSeaMetadata.imageUrl,
      volumeETH: vri.volumeNative?.value,
    })

    return acc
  }, [])
}

export default useRankings
