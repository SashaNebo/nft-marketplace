import { FC } from 'react'
import cn from './Rankings.module.scss'

const RankingListTop: FC = () => {
  return (
    <div className={[cn['rankings-list__top'], 'text-space-body'].join(' ')}>
      <div className={cn['collection']}>
        <span className='text-space-body'>#</span>
        <span className='text-space-body'>Collection</span>
      </div>
      <div className={cn['stats']}>
        <span className={cn['rankings-list__top-text']}>Floor Price</span>
        <span className={cn['rankings-list__top-text']}>Floor Change</span>
        <span className={cn['rankings-list__top-text']}>Volume</span>
      </div>
    </div>
  )
}

export default RankingListTop
