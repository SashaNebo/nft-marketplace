import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './Rankings.module.scss'
import { RANKINGS } from '../../types/componentsTypes/rankingsTypes'
import { percentState } from './additional'
import { toCollectVerifiedData } from '../../utils/collectVerifiedData.js'
import { rootRoute } from '../../router/routes.js'

type PROPS = {
  ranking: RANKINGS
  number: number
}

const RankingsListItem: FC<PROPS> = ({ ranking, number }) => {
  const { address, collectionName, floorPricePercent, floorPriceValue, logoUrl, volumeETH } =
    toCollectVerifiedData<RANKINGS>(ranking)

  const [percentValue, percentColor] = percentState(floorPricePercent)

  return (
    <div className={[cn['rankings-list__item']].join(' ')}>
      <div className={cn['collection']}>
        <span className={[cn['collection__number'], 'text-space-body'].join(' ')}>{number}</span>
        <Link
          to={`${rootRoute}/collection/${address}`}
          className={[cn['collection__wrapper'], 'animation-scale'].join(' ')}>
          <div className={cn['collection__avatar']}>
            <img src={logoUrl} />
          </div>
          <div className={[cn['collection__name'], 'text-work-h5'].join(' ')}>{collectionName}</div>
        </Link>
      </div>
      <div className={cn['stats']}>
        <div className={[cn['stats__sold'], 'text-space-body'].join(' ')}>{floorPriceValue}</div>
        <div className={[cn[percentColor], cn['stats__percent'], 'text-space-body'].join(' ')}>
          {percentValue}
        </div>
        <div className={[cn['stats__volume'], 'text-space-body'].join(' ')}>{volumeETH} ETH</div>
      </div>
    </div>
  )
}

export default RankingsListItem
