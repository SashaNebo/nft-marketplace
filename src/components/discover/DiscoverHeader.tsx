import { FC } from 'react'

import cn from './Discover.module.scss'
import { rootRoute } from '../../router/routes'
import { ButtonLink } from '../UI/buttons/ButtonLink'

const DiscoverHeader: FC = () => {
  return (
    <div className={cn['discover__header']}>
      <div className={cn['discover__header-wrapper']}>
        <h3 className='text-work-h3'>Discover More NFTs</h3>
        <h5 className={[cn['discover__header-subtitle'], 'text-work-h5'].join('')}>
          Explore new trending NFTs
        </h5>
      </div>

      <ButtonLink
        to={`${rootRoute}/marketplace`}
        variant='secondary'
        text='see all'
        size='lg'
        icon='eye'
        className={[cn['discover__header-link'], cn['desktop']].join(' ')}
      />
    </div>
  )
}

export default DiscoverHeader
