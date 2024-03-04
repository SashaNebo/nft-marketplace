import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './TopCollections.module.scss'
import Button from '../UI/button/Button'
import { rootRoute } from '../../router/routes'

const TopCollectionsHeader: FC = () => {
  return (
    <div className={cn['top-collections__header']}>
      <div className={cn['top-collections__header-wrapper']}>
        <h3 className='text-work-h3'>Top Collections for the Mounth</h3>
        <h5 className={cn['top-collections__header-subtitle']}>
          Checkout Top Rated Collections on the NFT Marketplace
        </h5>
      </div>
      <Link className={cn['top-collections__header-link']} to={`${rootRoute}/rankings`}>
        <Button
          className={cn['top-collections__header-button']}
          type='secondary'
          size='lg'
          icon='rocketLaunch'
          text='View Rankings'
        />
      </Link>
    </div>
  )
}

export default TopCollectionsHeader
