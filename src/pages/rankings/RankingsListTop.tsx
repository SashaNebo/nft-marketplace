import { FC } from 'react'
import cn from './Rankings.module.scss'

const RankingListTop: FC = () => {
  return (
    <div className={[cn['rankings-list__top'], 'text-space-body'].join(' ')}>
      <div className={cn['collection']}>
        <span className={[cn['collection__el'], 'text-space-body'].join(' ')}>#</span>
        <span className={[cn['collection__el'], 'text-space-body'].join(' ')}>Collection</span>
      </div>
      <div className={cn['stats']}>
        <span className={cn['rankings-list__top-text']}>Price</span>
        <span className={cn['rankings-list__top-text']}>Change</span>
        <span className={[cn['rankings-list__top-text'], cn['collection__el']].join(' ')}>
          Volume
        </span>
      </div>
    </div>
  )
}

export default RankingListTop
