import { Dispatch, MutableRefObject, useEffect, useRef, useState } from 'react'
import {
  COLLECTIONS_VOLUME,
  COLLECTIONS_VOLUME_RESULT,
  CONTRACT_META_DATA,
  COLLECTION_INFO,
  SETTINGS,
} from '../types/collectionsTypes'
import { getNFTCollectionsVolume } from '../api/apiRarible'
import { getContractMetadataBatch } from '../api/apiAlchemy'

type RETURN_TYPE = [COLLECTION_INFO[], boolean]
type TRACKED_REF = MutableRefObject<HTMLDivElement | null | undefined>
type CB = Dispatch<React.SetStateAction<COLLECTIONS_VOLUME>>

const useCollections = (settings: SETTINGS, trackedRef?: TRACKED_REF): RETURN_TYPE => {
  const [collectionsVolumeAPI, setCollectionsVolumeAPI] = useState<COLLECTIONS_VOLUME>({
    continuation: '',
    result: [],
  })

  const [collections, setCollections] = useState<COLLECTION_INFO[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { continuation } = collectionsVolumeAPI
  const { period, delay } = settings
  const observerRef = useRef<null | IntersectionObserver>(null)

  useEffect(() => {
    setCollections(() => [])
    setIsLoading(() => true)

    const timeout = setTimeout(() => {
      fetchCollectonsVolume(settings, setCollectionsVolumeAPI)
    }, delay)

    return () => clearTimeout(timeout)
  }, [period])

  useEffect(() => {
    if (!continuation) return

    const addressesList: string[] = collectionsVolumeAPI.result
      .filter(({ id }) => id.includes('0x'))
      .map(({ id }) => id.split(':')[1])

    const fetchContractMetadata = async () => {
      try {
        const contractMetaData = await getContractMetadataBatch<CONTRACT_META_DATA>(addressesList)
        const mergeDataAPI = mergingDataAPI(collectionsVolumeAPI.result, contractMetaData)
        setCollections(prevCreators => [...prevCreators, ...mergeDataAPI])
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(() => false)
      }
    }

    fetchContractMetadata()
  }, [collectionsVolumeAPI])

  useEffect(() => {
    if (!trackedRef || !collections.length) return

    const tracked = trackedRef.current

    observerRef.current = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setIsLoading(() => true)
          fetchCollectonsVolume(settings, setCollectionsVolumeAPI, continuation)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '400px' }
    )

    if (tracked) {
      observerRef.current.observe(tracked)
    }

    return () => {
      if (tracked) {
        return observerRef.current?.unobserve(tracked)
      }
    }
  }, [collections, trackedRef])

  return [collections, isLoading]
}

async function fetchCollectonsVolume(settings: SETTINGS, cb: CB, continuation?: string) {
  const { quantity, period } = settings

  const volumeAPI = await getNFTCollectionsVolume<COLLECTIONS_VOLUME>(
    quantity,
    period,
    continuation
  )

  cb(() => volumeAPI)
}

function mergingDataAPI(
  AV: COLLECTIONS_VOLUME_RESULT[],
  AF: CONTRACT_META_DATA[]
): COLLECTION_INFO[] {
  const data: COLLECTION_INFO[] = []

  AF.forEach(({ openSeaMetadata: meta }, i) => {
    const collectionInfo: COLLECTION_INFO = {
      id: AF[i].address,
      name: meta?.collectionName ?? null,
      logo: meta?.imageUrl ?? null,
      priceValue: AV[i]?.floorPrice?.value ?? null,
      pricePercent: AV[i]?.floorPrice?.changePercent ?? null,
      volume: AV[i]?.volumeNative.value ?? null,
    }

    meta && data.push(collectionInfo)
  })

  return data
}

export default useCollections
