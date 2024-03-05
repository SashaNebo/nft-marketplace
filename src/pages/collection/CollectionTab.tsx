import { FC, useEffect } from 'react'

import cn from './Collection.module.scss'

const CollectionTab: FC = () => {
  useEffect(() => window.scroll(0, 0), [])

  return (
    <div className={cn['tabs']}>
      <div className={[cn['tabs__item'], cn['tabs__item-active']].join(' ')}>
        <h5 className='text-work-h5'>Created</h5>
      </div>
    </div>
  )
}

export default CollectionTab
