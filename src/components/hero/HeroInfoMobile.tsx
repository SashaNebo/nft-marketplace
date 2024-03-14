import { FC } from 'react'

import cn from './Hero.module.scss'
import { rootRoute } from '../../router/routes'
import { ButtonLink } from '../UI/buttons/ButtonLink'

const HeroInfoMobile: FC = () => {
  return (
    <>
      <ButtonLink
        to={`${rootRoute}/marketplace`}
        text='get started'
        variant='primary'
        size='lg'
        icon='rocketLaunch'
        className={[cn['hero__info-mobile'] ,cn['hero__link-to-start']].join(' ')}
      />

      <div className={cn['hero__info-mobile']}>
        <div className={cn['hero__info-item']}>
          <h4 className='text-space-h4'>240k+ </h4>
          <p className={cn['hero__info-text']}>Total Sale</p>
        </div>
        <div className={cn['hero__info-item']}>
          <h4 className='text-space-h4'>100k+</h4>
          <p className={cn['hero__info-text']}>Auctions</p>
        </div>
        <div className={cn['hero__info-item']}>
          <h4 className='text-space-h4'>240k+</h4>
          <p className={cn['hero__info-text']}>Artists</p>
        </div>
      </div>
    </>
  )
}
export default HeroInfoMobile
