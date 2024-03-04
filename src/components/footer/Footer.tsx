import { FC } from 'react'

import cn from './Footer.module.scss'
import FooterBottom from './FooterBottom'
import FooterContent from './FooterContent'

const Footer: FC = () => {
  return (
    <footer className={cn['footer']}>
      <div className={'container'}>
        <div className={cn['footer__wrapper']}>
          <FooterContent />
        </div>

        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
