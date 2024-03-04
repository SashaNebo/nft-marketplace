import { FC } from 'react'

import cn from './Collection.module.scss'
import { COLLECTION } from '../../types/componentsTypes/collectionTypes'
import { toCollectVerifiedData } from '../../utils/collectVerifiedData'

type PROPS = {
  collection: COLLECTION
}

const CollectionBanner: FC<PROPS> = ({ collection }) => {
  const { bannerUrl, logoUrl } = toCollectVerifiedData<COLLECTION>(collection)

  return (
    <div className={cn['collection__banner']}>
      {bannerUrl ? (
        <img className={cn['collection__banner-img']} src={bannerUrl} alt='' />
      ) : (
        <div className={cn['collection__banner-bg']}></div>
      )}
      <div className='container'>
        <div className={cn['collection__logo']}>
          <img src={logoUrl} alt='' />
        </div>
      </div>
    </div>
  )
}

export default CollectionBanner
