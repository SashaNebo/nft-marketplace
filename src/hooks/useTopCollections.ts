import { useEffect, useState } from 'react'
import { SETTING_TC, TOP_COLLECTIONS } from '../types/componentsTypes/topCollectionsTypes'
import { AlchemyAPI, RaribleAPI } from '../api'
import { VOLUME_RESULT } from '../types/apiTypes/raribleTypes'
import { RETURN_HOOK } from './types'

type RETURN = RETURN_HOOK<TOP_COLLECTIONS[]>

const useTopCollections = ({ limit, period }: SETTING_TC): RETURN => {
  const [topCollections, setTopCollections] = useState<TOP_COLLECTIONS[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setIsLoading(() => true)

    RaribleAPI.getNFTCollectionsvolume(period, limit)
      .then(({ result }) => requestContractBatch(result))
      .catch(error => {
        setIsLoading(() => false)
        setError(() => String(error))
      })
  }, [])

  const requestContractBatch = async (volumeResult: VOLUME_RESULT[]) => {
    const addressesList = volumeResult
      .filter(({ id }) => id.includes(':0x'))
      .map(({ id }) => id.split(':')[1])

    try {
      const { contracts } = await AlchemyAPI.getContractMetadataBatch(addressesList)

      const topCollectionsData: TOP_COLLECTIONS[] = contracts.map((contract, i) => ({
        address: contract.address,
        collectionName: contract.openSeaMetadata.collectionName,
        logoUrl: contract.openSeaMetadata.imageUrl,
        volumeETH: volumeResult[i].volumeNative.value,
      }))

      setTopCollections(() => topCollectionsData)
    } catch (error) {
      setError(() => String(error))
    } finally {
      setIsLoading(() => false)
    }
  }

  return [topCollections, isLoading, error]
}

export default useTopCollections
