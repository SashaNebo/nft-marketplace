import { useEffect, useState } from 'react'
import { getContractMetadata } from '../api/apiAlchemy'
import { CONTRACT_INFO, CONTRACT_META_DATA } from '../types/collectionsTypes'

const useContract = (address: string): [CONTRACT_INFO | null, boolean, string] => {
  const [isError, setIsError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [contractData, setContractData] = useState<CONTRACT_INFO | null>(null)

  useEffect(() => {
    setIsLoading(() => true)
    getContractMetadata<CONTRACT_META_DATA>(address)
      .then(obj => {
        setContractData(() => ({
          id: obj.address,
          totalSupply: obj.totalSupply,
          banner: obj.openSeaMetadata.bannerImageUrl,
          collectionName: obj.openSeaMetadata.collectionName,
          description: obj.openSeaMetadata.description,
          discordUrl: obj.openSeaMetadata.discordUrl,
          floorPrice: obj.openSeaMetadata.floorPrice,
          logo: obj.openSeaMetadata.imageUrl,
          twitterUsername: obj.openSeaMetadata.twitterUsername,
          verified: obj.openSeaMetadata.safelistRequestStatus,
        }))
      })
      .catch(error => setIsError(() => String(error)))
      .finally(() => setIsLoading(() => false))
  }, [])

  return [contractData, isLoading, isError]
}

export default useContract
