import { FC } from 'react'
import clsx from 'clsx'

import cn from './Marketplace.module.scss'

type MarketplaceTabsProps = {
  nftsLength: number
}
const MarketplaceTabs: FC<MarketplaceTabsProps> = ({ nftsLength }) => {
  return (
    <div className={cn['tabs']}>
      <div className={clsx(cn['tabs__item'], nftsLength && cn['tabs__item-active'])}>
        <h5 className='text-work-h5'>NFTs From collections</h5>
        <div className={clsx(cn['tabs__el'], nftsLength && cn['tabs__el-active'])}>
          <span className='text-space-body'>{nftsLength}+</span>
        </div>
      </div>
    </div>
  )
}

export default MarketplaceTabs
