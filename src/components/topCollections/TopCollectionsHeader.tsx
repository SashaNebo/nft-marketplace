import { FC } from 'react'

import cn from './TopCollections.module.scss'
import { rootRoute } from '../../router/routes'
import { ButtonLink } from '../UI/buttons/ButtonLink'

const TopCollectionsHeader: FC = () => {
  return (
    <div className={cn['top-collections__header']}>
      <div className={cn['top-collections__header-wrapper']}>
        <h3 className='text-work-h3'>Top Collections for the Mounth</h3>
        <h5 className={cn['top-collections__header-subtitle']}>
          Checkout Top Rated Collections on the NFT Marketplace
        </h5>
      </div>

      <ButtonLink
        to={`${rootRoute}/rankings`}
        variant='secondary'
        size='lg'
        icon='rocketLaunch'
        text='View Rankings'
        className={[cn['top-collections__header-link'], cn['top-collections__header-button']].join(' ')}
      />
    </div>
  )
}

export default TopCollectionsHeader
