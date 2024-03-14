import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './Hero.module.scss'
import Button from '../UI/buttons/Button'
import { rootRoute } from '../../router/routes'

const HeroIntro: FC = () => {
  return (
    <div className={cn['hero__intro']}>
      <h1 className={[cn['hero__title'], 'text-work-h1'].join(' ')}>
        Discover digital art & Collect NFTs
      </h1>
      <p className={cn['hero__description']}>
        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than
        20k NFT artists.
      </p>

      <Link to={`${rootRoute}/marketplace`} className={cn['hero__link-to-start']}>
        <Button
          text='get started'
          variant='primary'
          size='lg'
          icon='rocketLaunch'
          className={cn['hero__button']}
        />
      </Link>

      <div className={cn['hero__info']}>
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
    </div>
  )
}

export default HeroIntro
