import { FC } from 'react'

import cn from './Footer.module.scss'

const FooterBottom: FC = () => {
  return (
    <div className={cn['footer__bottom']}>
      <hr className={cn['divider']} />
      <p className={[cn['license'], 'text-work-caption'].join(' ')}>
        Ⓒ NFT Market. Use this template freely.
      </p>
    </div>
  )
}

export default FooterBottom
