import { FC } from 'react'

import cn from './Rankings.module.scss'
import { COLLECTION_INFO } from '../../types/collectionsTypes'
import { getCollectionsInfo, percentState } from '../../utils/collectionsUtils'
import { Link } from 'react-router-dom'

type RankingsListItemT = {
  number: number
  rankingItem: COLLECTION_INFO
}

const RankingsListItem: FC<RankingsListItemT> = ({ number, rankingItem }) => {
  const { id, name, logo, priceValue, pricePercent, volume } = getCollectionsInfo(rankingItem)

  const [percentValue, percentColor] = percentState(pricePercent)

  return (
    <div className={[cn['rankings-list__item']].join(' ')}>
      <div className={cn['collection']}>
        <span className={[cn['collection__number'], 'text-space-body'].join(' ')}>{number}</span>
        <Link
          to={`/collection/${id}`}
          className={[cn['collection__wrapper'], 'animation-scale'].join(' ')}>
          <div className={cn['collection__avatar']}>
            <img src={logo} />
          </div>
          <div className='text-work-h5'>{name}</div>
        </Link>
      </div>
      <div className={cn['stats']}>
        <div className='stats__sold text-space-body'>{priceValue}</div>
        <div className={[cn[percentColor], 'text-space-body'].join(' ')}>{percentValue}</div>
        <div className='stats__volume text-space-body'>{volume} ETH</div>
      </div>
    </div>
  )
}

export default RankingsListItem
