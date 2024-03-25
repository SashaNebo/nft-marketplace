import { FC } from 'react'

import cn from './Collection.module.scss'
import { spritePath } from '../../helpers/imgPath'
import { COLLECTION } from '../../types/componentsTypes/collectionTypes'
import { toCollectVerifiedData } from '../../utils/collectVerifiedData'
import { CollectionInfoButtons } from './CollectionInfoButtons'

type PROPS = {
  collection: COLLECTION
}

const CollectionInfo: FC<PROPS> = ({ collection }) => {
  const {
    address,
    collectionName,
    description,
    discordUrl,
    twitterUsername,
    floorPriceValue,
    totalSupply,
    verified,
  } = toCollectVerifiedData<COLLECTION>(collection)

  return (
    <div className={cn['collection__info']}>
      <div className={cn['collection__info-top']}>
        <h2 className={[cn['collection__nickname'], 'text-work-h2'].join(' ')}>{collectionName}</h2>
        <CollectionInfoButtons address={address} />
      </div>

      <InfoStats floorPriceValue={floorPriceValue} totalSupply={totalSupply} verified={verified} />

      <InfoAdditional
        description={description}
        discordUrl={discordUrl}
        twitterUsername={twitterUsername}
      />
    </div>
  )
}

const InfoStats: FC<{ floorPriceValue: string; totalSupply: string; verified: string }> = ({
  floorPriceValue,
  totalSupply,
  verified,
}) => {
  return (
    <div className={cn['stats']}>
      <div className={cn['stats__el']}>
        <h4 className='text-space-h4'>{floorPriceValue}</h4>
        <p className={cn['stats__text']}>Floor price</p>
      </div>
      <div className={cn['stats__el']}>
        <h4 className='text-space-h4'>{totalSupply}</h4>
        <p className={cn['stats__text']}>Supply</p>
      </div>
      <div className={cn['stats__el']}>
        <img className={cn['stats__value-img']} src={verified} alt='' />
        <p className={cn['stats__text']}>
          {verified?.includes('no-verified') ? 'No verified' : 'Verified'}
        </p>
      </div>
    </div>
  )
}

const InfoAdditional: FC<{ description: string, discordUrl: string, twitterUsername: string }> = ({ 
  description, discordUrl, twitterUsername }) => {
  return (
    <>
      <div className={cn['additional']}>
        <h5 className='text-space-h5'>Bio</h5>
        <p className={[cn['additional__description'], 'text-work-h5'].join(' ')}>{description}</p>
      </div>

      <div className={cn['additional']}>
        <h5 className='text-space-h5'>Links</h5>
        <div className={cn['additional__icons']}>
          <a href={discordUrl} target='_blank'>
            <svg className={cn['additional__icon']}>
              <use href={`${spritePath}#discordLogo`}></use>
            </svg>
          </a>
          <a href={'https://twitter.com/' + twitterUsername} target='_blank'>
            <svg className={cn['additional__icon-twitter']}>
              <use href={`${spritePath}#twitterLogo`}></use>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}

export default CollectionInfo
