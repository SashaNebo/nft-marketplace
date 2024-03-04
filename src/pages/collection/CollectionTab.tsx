import { FC } from 'react'
import cn from './Collection.module.scss'
import clsx from 'clsx'

const CollectionTab: FC = () => {
  return (
    <div className={cn['tabs']}>
      <div className={clsx(cn['tabs__item'], cn['tabs__item-active'])}>
        <h5 className='text-work-h5'>Created</h5>
        <div className={cn['tabs__item-col']}>
          <span className='text-space-body'>666</span>
        </div>
      </div>
    </div>
  )
}

export default CollectionTab
