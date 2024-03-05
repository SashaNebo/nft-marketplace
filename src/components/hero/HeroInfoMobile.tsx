import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './Hero.module.scss'
import { rootRoute } from '../../router/routes'
import Button from '../UI/button/Button'

const HeroInfoMobile: FC = () => {
  return (
    <>
      <Link to={`${rootRoute}/marketplace`} className={cn['hero__link-to-start']}>
        <Button
          text='get started'
          type='primary'
          size='lg'
          icon='rocketLaunch'
          className={cn['hero__button-mobile']}
        />
      </Link>

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
