import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './Hero.module.scss'
import Author from '../UI/author/Author'
import { heroNFT } from './additional'
import { rootRoute } from '../../router/routes'

const HeroHighlighted: FC = () => {
  const { address, tokenId, collectionName, logoUrl, nftImageUrl, nftName } = heroNFT
  return (
    <div className={[cn['highlighted']].join(' ')}>
      <Link to={`${rootRoute}/nft/${address}:${tokenId}`}>
        <div className={cn['highlighted__img']}>
          <img src={nftImageUrl} alt='' />
        </div>
      </Link>
      <div className={cn['highlighted__wrapper']}>
        <Author id={address} title={nftName} nickName={collectionName} avatarUrl={logoUrl} />
      </div>
    </div>
  )
}

export default HeroHighlighted
