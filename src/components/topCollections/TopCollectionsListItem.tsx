import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './TopCollections.module.scss'
import { COLLECTION_INFO } from '../../types/collectionsTypes'
import { getCollectionsInfo } from '../../utils/collectionsUtils'

type ListItemProps = {
  creatorsItem: COLLECTION_INFO
  number: number
}

const TopCollectionsListItem: FC<ListItemProps> = ({ creatorsItem, number }) => {
  const { id, name, logo, volume } = getCollectionsInfo(creatorsItem)

  return (
    <Link to={`/collection/${id}`}>
      <div className={[cn['collections__card'], 'animation-scale'].join(' ')}>
        <div className={cn['collections__number']}>
          <p className={cn['collections__number-el']}>{number}</p>
        </div>
        <div className={cn['collections__avatar']}>
          <img className={cn['collections__avatar-img']} src={logo} />
        </div>
        <h5 className={[cn['collections__nickname'], 'text-work-h5'].join(' ')}>{name}</h5>
        <div className={cn['collections__total-sales']}>
          <p className='text-work-body'>Total Sales:</p>
          <p className='text-space-body'>{volume} ETH</p>
        </div>
      </div>
    </Link>
  )
}

export default TopCollectionsListItem
