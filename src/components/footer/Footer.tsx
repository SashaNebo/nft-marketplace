import { FC } from 'react'
import cn from './Footer.module.scss'
import Button from '../UI/buttons/Button'
import { spritePath } from '../../helpers/pathIcons'

const Footer: FC = () => {
  return (
    <footer className={cn['footer']}>
      <div className={cn['container']}>
        <div className={cn['footer__wrapper']}>
          <div className={cn['footer__content']}>
            <div className={cn['info-block']}>
              <h5 className={[cn['info-block__title'], 'text-space-h5'].join(' ')}>
                <svg className={cn.icon}>
                  <use href={`${spritePath.buttonIcons}#storeFront`}></use>
                </svg>
                NFT Marketplace
              </h5>
              <a className={cn['info-block__link']}>
                NFT marketplace UI created <br /> with Anima for Figma.
              </a>
              <a className={cn['info-block__link']}>Join our community</a>
              <div className={cn['info-block__social']}>
                <svg className={cn['info-block__social-icon']}>
                  <use href={`${spritePath.buttonIcons}#discordLogo`}></use>
                </svg>
                <svg className={cn['info-block__social-icon']}>
                  <use href={`${spritePath.buttonIcons}#youtubeLogo`}></use>
                </svg>
                <svg className={cn['info-block__social-icon']}>
                  <use href={`${spritePath.buttonIcons}#twitterLogo`}></use>
                </svg>
                <svg className={cn['info-block__social-icon']}>
                  <use href={`${spritePath.buttonIcons}#instagramLogo`}></use>
                </svg>
              </div>
            </div>
            <div className={cn['info-block']}>
              <h5 className='text-space-h5'>Explore</h5>
              <a className={cn['info-block__link']}>Marketplace</a>
              <a className={cn['info-block__link']}>Rankings</a>
              <a className={cn['info-block__link']}>Connect a wallet</a>
            </div>
            <div className={cn['info-block']}>
              <h5 className='text-space-h5'>Join our weekly digest</h5>
              <a className={cn['info-block__link']}>
                Get exclusive promotions & updates <br /> straight to your inbox.
              </a>
              <form className={cn['subscribe']}>
                <input
                  className={cn['subscribe__input']}
                  type='text'
                  placeholder='Enter your email here'
                />
                <Button type='primary' size='lg' text='Subscribe' />
              </form>
            </div>
          </div>
        </div>

        <div className={cn['footer__bottom']}>
          <hr className={cn['divider']} />
          <p className={[cn['license'], 'text-work-caption'].join(' ')}>
            Ⓒ NFT Market. Use this template freely.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
