import { useEffect, useState } from 'react'

import { AlchemyAPI } from '../api'
import { RETURN_HOOK } from './types'
import { COLLECTION } from '../types/componentsTypes/collectionTypes'

type RETURN = RETURN_HOOK<Required<COLLECTION>>

const useCollection = (address: string): RETURN => {
  const [collection, setCollection] = useState<Partial<COLLECTION>>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setIsLoading(() => true)

    AlchemyAPI.getContractMetadata(address)
      .then(obj => {
        setCollection(() => ({
          address: obj.address,
          bannerUrl: obj.openSeaMetadata.bannerImageUrl,
          collectionName: obj.openSeaMetadata.collectionName,
          description: obj.openSeaMetadata.description,
          discordUrl: obj.openSeaMetadata.discordUrl,
          floorPriceValue: obj.openSeaMetadata.floorPrice,
          logoUrl: obj.openSeaMetadata.imageUrl,
          totalSupply: obj.totalSupply,
          twitterUsername: obj.openSeaMetadata.twitterUsername,
          verified: obj.openSeaMetadata.safelistRequestStatus,
        }))
      })
      .catch(error => setError(() => String(error)))
      .finally(() => setIsLoading(() => false))
  }, [])

  return [collection, isLoading, error] as RETURN
}

export default useCollection
