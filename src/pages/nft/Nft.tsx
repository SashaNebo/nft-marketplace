import { FC } from 'react'
import { useParams } from 'react-router-dom'

import cn from './NFT.module.scss'
import NftContent from './NftContent'
import NftMore from './NftMore'
import { defaultAddress } from '../../helpers/someHelper'

const Nft: FC = () => {
  const paramID = useParams().id || defaultAddress + ':0'

  return (
    <main className={cn['nft']}>
      <NftContent paramID={paramID} />
      <div className='container'>
        <NftMore paramID={paramID} />
      </div>
    </main>
  )
}

export default Nft
