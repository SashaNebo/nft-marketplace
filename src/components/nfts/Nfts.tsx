import { FC, useEffect } from 'react'

import cn from './Nfts.module.scss'
import NftsList from './NftsList'
import { NFT_SHOWCASE } from '../../types/componentsTypes/nftsTypes'

type NFTsProps = {
  nfts: NFT_SHOWCASE[]
  isLoading: boolean
  errorMessage: string
  bg?: 'dark' | 'gray'
}

const Nfts: FC<NFTsProps> = ({ nfts, isLoading, errorMessage, bg }) => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className='nfts'>
      <div className={cn['container']}>
        <NftsList nfts={nfts} isLoading={isLoading} errorMessage={errorMessage} bg={bg} />
      </div>
    </div>
  )
}

export default Nfts
