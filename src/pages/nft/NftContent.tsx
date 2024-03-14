import { FC, useEffect } from 'react'

import cn from './NFT.module.scss'
import { spritePath } from '../../helpers/imgPath'
import Author from '../../components/UI/author/Author'
import useNFT from '../../hooks/useNFT'
import { toCollectVerifiedData } from '../../utils/collectVerifiedData'
import { rootRoute } from '../../router/routes'
import Loader from '../../components/loader/Loader'
import NotFound from '../../components/notFound/NotFound'
import { ButtonLink } from '../../components/UI/buttons/ButtonLink'

const NftContent: FC<{ paramID: string }> = ({ paramID }) => {
  const [nft, isLoading, error] = useNFT(paramID)
  useEffect(() => window.scroll(0, 0), [paramID])

  const {
    address,
    collectionName,
    description,
    discordUrl,
    floorPriceValue,
    logoUrl,
    nftImageUrl,
    nftName,
    twitterUsername,
  } = toCollectVerifiedData(nft)

  if (isLoading) return <Loader />
  if (error) return <NotFound />

  return (
    <>
      {!isLoading && (
        <div className='container'>
          <div className={cn['nft__wrapper']}>
            <div className={cn['nft__img']}>
              <img src={nftImageUrl} alt='' />
            </div>{' '}
            <div className={cn['nft__info']}>
              <h2 className='text-work-h2'>{nftName}</h2>
              <div className={cn['nft__author']}>
                <Author
                  id={address}
                  title='Created by'
                  nickName={collectionName}
                  avatarUrl={logoUrl}
                />
              </div>
              <div className={cn['nft__price']}>
                <p className='text-work-body'>Price: </p>
                <h5 className='text-work-h5'>{floorPriceValue} ETH</h5>
              </div>

              <div className={cn['nft-links']}>
                <h5 className='text-space-h5'>Links</h5>
                <div className={cn['nft-links__icons']}>
                  <a href={discordUrl} target='_blank'>
                    <svg className={cn['nft-links__icon']}>
                      <use href={`${spritePath}#discordLogo`}></use>
                    </svg>
                  </a>
                  <a href={'https://twitter.com/' + twitterUsername} target='_blank'>
                    <svg className={cn['nft-links__icon-twitter']}>
                      <use href={`${spritePath}#twitterLogo`}></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={cn['nft__description']}>
            <h5 className='text-space-h5'>Description</h5>
            <p className={['text-work-h5', cn['nft__description-text']].join(' ')}>{description}</p>
          </div>

          <div className={cn['nft__bottom']}>
            <h3 className='text-work-h3'>More from this collection</h3>

            <ButtonLink
              to={`${rootRoute}/collection/${address}`}
              icon='arrowRight'
              size='lg'
              variant='secondary'
              text='Go To Collection Page'
            />
          </div>
        </div>
      )}
    </>
  )
}

export default NftContent
