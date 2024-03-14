import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './Footer.module.scss'
import { spritePath } from '../../helpers/imgPath'
import Button from '../UI/buttons/Button'
import { rootRoute } from '../../router/routes'

export const InfoBlockNFT: FC = () => {
  return (
    <div className={cn['info-block']}>
      <Link to={'/'}>
        <h5 className={[cn['info-block__title'], 'text-space-h5'].join(' ')}>
          <svg className={cn.icon}>
            <use href={`${spritePath}#storeFront`}></use>
          </svg>
          NFT Marketplace
        </h5>
      </Link>
      <a className={cn['info-block__link']}>
        NFT marketplace UI created <br /> with Anima for Figma.
      </a>
      <a className={cn['info-block__link']}>Join our community</a>
      <div className={cn['info-block__social']}>
        <svg className={cn['info-block__social-icon']}>
          <use href={`${spritePath}#discordLogo`}></use>
        </svg>
        <svg className={cn['info-block__social-icon']}>
          <use href={`${spritePath}#youtubeLogo`}></use>
        </svg>
        <svg className={cn['info-block__social-icon']}>
          <use href={`${spritePath}#twitterLogo`}></use>
        </svg>
        <svg className={cn['info-block__social-icon']}>
          <use href={`${spritePath}#instagramLogo`}></use>
        </svg>
      </div>
    </div>
  )
}

export const InfoBlockExplore: FC = () => {
  return (
    <div className={cn['info-block']}>
      <h5 className='text-space-h5'>Explore</h5>
      <Link to={`${rootRoute}/marketplace`} className={cn['info-block__link']}>
        Marketplace
      </Link>
      <Link to={`${rootRoute}/rankings`} className={cn['info-block__link']}>
        Rankings
      </Link>
      <Link to={`${rootRoute}/connect`} className={cn['info-block__link']}>
        Connect a wallet
      </Link>
    </div>
  )
}

export const InfoBlockJoin: FC = () => {
  return (
    <div className={cn['info-block']}>
      <h5 className='text-space-h5'>Join our weekly digest</h5>
      <a className={cn['info-block__link']}>
        Get exclusive promotions & updates <br /> straight to your inbox.
      </a>
      <form className={cn['subscribe']}>
        <input className={cn['subscribe__input']} type='text' placeholder='Enter your email here' />
        <Button variant='primary' size='lg' text='Subscribe' className={cn['button__primary1']} />
        <Button
          variant='primary'
          size='md'
          text='Subscribe'
          icon='message'
          className={cn['button__primary2']}
        />
      </form>
    </div>
  )
}
