import { FC } from 'react'

import cn from './Collection.module.scss'
import CollectionTab from './CollectionTab'
import CollectionBanner from './CollectionBanner'
import CollectionInfo from './CollectionInfo'
import { spritePath } from '../../helpers/imgPath'
import useCollection from '../../hooks/useCollection'
import Loader from '../../components/loader/Loader'
import NotFound from '../../components/notFound/NotFound'

const CollectionContenet: FC<{ address: string }> = ({ address }) => {
  const [collection, isLoading, error] = useCollection(address)

  if (isLoading) return <Loader />
  if (error) return <NotFound />

  return (
    <>
      <CollectionBanner collection={collection} />

      <div className='container'>
        <CollectionInfo collection={collection} />
      </div>

      <div className={cn['devider']}>
        <svg className={cn['devider__icon']}>
          <use href={`${spritePath}#line`}></use>
        </svg>
      </div>

      <div className='container'>
        <CollectionTab />
      </div>
    </>
  )
}

export default CollectionContenet
