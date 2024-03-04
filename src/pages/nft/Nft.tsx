import { FC, useEffect, useRef } from 'react'

import cn from './NFT.module.scss'
import Author from '../../components/UI/author/Author'
import { spritePath } from '../../helpers/pathIcons'
import Button from '../../components/UI/buttons/Button'
import { Link, useParams } from 'react-router-dom'
import { getRandomNumbers } from '../../utils/nftsUtils'
import useCreatedNFTs from '../../hooks/useCreatedNFTs'
import Nfts from '../../components/nfts/Nfts'
import { CREATED_NFTS_SETTINGS } from '../../types/nftsCreatedTypes'
import useNFT from '../../hooks/useNFT'
import NotFound from '../notFound/NotFound'
import Loader from '../../components/loader/Loader'
import { getNFTInfo, placeholderNFT } from '../../utils/utilsNFT'
const Nft: FC = () => {
  const { id: paramID } = useParams()

  useEffect(() => {
    window.scroll(0, 0)
  }, [paramID])

  const trackedRef = useRef<HTMLDivElement | null>(null)

  const settings: CREATED_NFTS_SETTINGS = {
    address: paramID?.split(':')[0] || '',
    randomStartTokens: getRandomNumbers(0, 5000, 30),
  }

  const [nftInfo, nftLoading, nftError] = useNFT(paramID || '')

  if (nftError) return <NotFound />
  // if (nftLoading) return <Loader />

  const [nftsCreated, loadingCreated, errorCreated] = useCreatedNFTs(settings, trackedRef)

  const infoNFT = nftInfo ? getNFTInfo(nftInfo) : placeholderNFT

  const {
    id,
    nameCollection,
    nameNFT,
    logoUrl,
    imageUrl,
    description,
    discordUrl,
    twitterUsername,
    floorPrice,
    mintTimeStamp,
  } = infoNFT

  return (
    <main className={cn['nft']}>
      {nftLoading && <Loader />}
      <div className='container'>
        <div className={cn['nft__wrapper']}>
          <div className={cn['nft__img']}>
            <img src={imageUrl} alt='' />
          </div>{' '}
          <div className={cn['nft__info']}>
            <h2 className='text-work-h2'>{nameNFT}</h2>
            <h6 className='text-work-h5'>{mintTimeStamp}</h6>
            <div className={cn['nft__author']}>
              <Author id={id} title='Created by' nickName={nameCollection} avatarUrl={logoUrl} />
            </div>
            <div className={cn['nft__price']}>
              <p className='text-work-body'>Price: </p>
              <h5 className='text-work-h5'>{floorPrice} ETH</h5>
            </div>

            <div className={cn['nft-links']}>
              <h5 className='text-space-h5'>Links</h5>
              <div className={cn['nft-links__icons']}>
                <a href={discordUrl} target='_blank'>
                  <svg className={cn['nft-links__icon']}>
                    <use href={`${spritePath.buttonIcons}#discordLogo`}></use>
                  </svg>
                </a>
                <a href={'https://twitter.com/' + twitterUsername} target='_blank'>
                  <svg className={cn['nft-links__icon-twitter']}>
                    <use href={`${spritePath.buttonIcons}#twitterLogo`}></use>
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
          <Link to={`/collection/${id}`}>
            <Button icon='arrowRight' size='lg' type='secondary' text='Go To Collection Page' />
          </Link>
        </div>

        <div className={cn['nft__more']}>
          <Nfts nfts={nftsCreated} loading={loadingCreated} bg='gray' />
        </div>
        <div ref={trackedRef}></div>
      </div>
    </main>
  )
}

export default Nft
