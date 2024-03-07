import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './Discover.module.scss'
import Button from '../UI/button/Button'
import { rootRoute } from '../../router/routes'

const DiscoverHeader: FC = () => {
  return (
    <div className={cn['discover__header']}>
      <div className={cn['discover__header-wrapper']}>
        <h3 className='text-work-h3'>Discover More NFTs</h3>
        <h5 className={[cn['discover__header-subtitle'], 'text-work-h5'].join('')}>
          Explore new trending NFTs
        </h5>
      </div>
      <Link
        className={[cn['discover__header-link'], cn['desktop']].join(' ')}
        to={`${rootRoute}/marketplace`}>
        <Button type='secondary' text='see all' size='lg' icon='eye' />
      </Link>
    </div>
  )
}

export default DiscoverHeader
