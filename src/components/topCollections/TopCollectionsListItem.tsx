import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './TopCollections.module.scss'
import { TOP_COLLECTIONS } from '../../types/componentsTypes/topCollectionsTypes'
import { toCollectVerifiedData } from '../../utils/collectVerifiedData.js'
import { rootRoute } from '../../router/routes.js'

type PROPS = {
  collection: TOP_COLLECTIONS
  number: number
}

const TopCollectionsListItem: FC<PROPS> = ({ collection, number }) => {
  const { address, collectionName, logoUrl, volumeETH } =
    toCollectVerifiedData<TOP_COLLECTIONS>(collection)

  return (
    <Link to={`${rootRoute}/collection/${address}`}>
      <div className={[cn['collections__card'], 'animation-scale'].join(' ')}>
        <div className={cn['collections__number']}>
          <p className={cn['collections__number-el']}>{number}</p>
        </div>
        <div className={cn['collections__avatar']}>
          <img className={cn['collections__avatar-img']} src={logoUrl} />
        </div>
        <h5 className={[cn['collections__nickname'], 'text-work-h5'].join(' ')}>
          {collectionName ?? 'Collection'}
        </h5>
        <div className={cn['collections__total-sales']}>
          <p className='text-work-body'>Total Sales:</p>
          <p className='text-space-body'>{volumeETH} ETH</p>
        </div>
      </div>
    </Link>
  )
}

export default TopCollectionsListItem
