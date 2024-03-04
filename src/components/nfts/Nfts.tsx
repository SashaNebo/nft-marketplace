import { FC, useEffect } from 'react'
import NftsList from './NftsList'
import { NFTS_INFO } from '../../types/nftsTypes'

type NFTsProps = {
  nfts: NFTS_INFO[]
  bg?: 'dark' | 'gray'
  loading: boolean
}

const Nfts: FC<NFTsProps> = ({ nfts, bg, loading }) => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div className='nfts'>
      <div className='container'>
        <NftsList loading={loading} nfts={nfts} bg={bg} />
      </div>
    </div>
  )
}

export default Nfts
