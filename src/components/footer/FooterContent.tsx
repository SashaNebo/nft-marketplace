import { FC } from 'react'

import cn from './Footer.module.scss'
import { InfoBlockExplore, InfoBlockJoin, InfoBlockNFT } from './FooterInfoBlocks'

const FooterContent: FC = () => {
  return (
    <div className={cn['footer__content']}>
      <InfoBlockNFT />
      <InfoBlockExplore />
      <InfoBlockJoin />
    </div>
  )
}

export default FooterContent
