import { useContext, useEffect, useState } from 'react'

import { ACCOUNT_NFTS, ACCOUNT_NFTS_STATE } from '../types/accountTypes/accountTypes'
import { AccountNFTsContext } from '../context'
import useAccount from './useAccount'
import MockAPI from '../api/MockAPI'

const useAccountNFTs = () => {
  const {id} = useAccount().account
  const [nfts, setNFTs] = useState<ACCOUNT_NFTS[]>([])
  
  useEffect(() => {
    id && MockAPI.getNFTs(id).then(mockNFTs => setNFTs(() => mockNFTs))
  }, [id])

  const setAccountNFTs = (workCase: 'add' | 'remove' | 'clearAll', nft: ACCOUNT_NFTS) => {
    const addNFT = async () => {
      MockAPI.updateAccountNFTs(id, [...nfts, nft])
      setNFTs(() => [...nfts, nft])
    }

    const removeNFT = () => {
      const filteringNFTs = nfts.filter(
        ({ address, tokenId }) => address + tokenId !== nft.address + nft.tokenId
      )
      MockAPI.updateAccountNFTs(id, filteringNFTs)
      setNFTs(() => filteringNFTs)
    }

    const clearAll = () => {
      MockAPI.updateAccountNFTs(id, [])
      setNFTs(() => [])
    }

    workCase === 'add' && addNFT()
    workCase === 'remove' && removeNFT()
    workCase === 'clearAll' && clearAll()
  }

  return { accountNFTs: nfts, setAccountNFTs }
}

const useAccountNFTsState = () => {
  const { accountNFTs, setAccountNFTs } = useContext(
    AccountNFTsContext as React.Context<NonNullable<ACCOUNT_NFTS_STATE>>
  )

  return { accountNFTs, setAccountNFTs }
}

export { useAccountNFTs, useAccountNFTsState }
