import { FC } from 'react'
import { useParams } from 'react-router-dom'

import cn from './Collection.module.scss'
import CollectionContenet from './CollectionContenet'
import CollectionNFTs from './CollectionNFTs'
import { defaultAddress } from '../../helpers/someHelper'

const Collection: FC = () => {
  const address = useParams().id || defaultAddress

  return (
    <main className={cn['collection']}>
      <CollectionContenet address={address} />
      <CollectionNFTs address={address} />
    </main>
  )
}

export default Collection
