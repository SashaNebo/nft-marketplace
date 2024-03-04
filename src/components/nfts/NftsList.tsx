import { FC } from 'react'
import cn from './Nfts.module.scss'
import NFtsListCard from './NFtsListCard'
import { NFTS_INFO } from '../../types/nftsTypes'
import LoaderSmall from '../loader/LoaderSmall'

type NFTsListProps = {
  nfts: NFTS_INFO[]
  bg?: 'dark' | 'gray'
  loading: boolean
}

const NftsList: FC<NFTsListProps> = ({ nfts, bg, loading }) => {
  return (
    <>
      <div className={cn['nfts-list']}>
        {nfts.map((nft, i) => (
          <NFtsListCard key={i} nft={nft} bg={bg} />
        ))}
      </div>

      {loading && <LoaderSmall />}
    </>
  )
}

export default NftsList
