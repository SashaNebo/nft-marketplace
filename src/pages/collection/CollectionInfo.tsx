import { FC, useState } from 'react'
import clsx from 'clsx'

import cn from './Collection.module.scss'
import Button from '../../components/UI/button/Button'
import { spritePath } from '../../helpers/imgPath'
import { COLLECTION } from '../../types/componentsTypes/collectionTypes'
import { toCollectVerifiedData } from '../../utils/collectVerifiedData'
import { modID } from '../../helpers/someHelper'

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

  const [activeCopy, setActiveCopy] = useState<boolean>(false)

  const croppedID = modID(address)

  const copyingID = () => {
    navigator.clipboard
      .writeText(address)
      .then(() => setActiveCopy(true))
      .finally(() => setTimeout(() => setActiveCopy(false), 3000))
  }

  return (
    <div className={cn['collection__info']}>
      <div className={cn['collection__info-top']}>
        <h2 className={[cn['collection__nickname'], 'text-work-h2'].join(' ')}>{collectionName}</h2>
        <div className={cn['collection__info-buttons']}>
          <Button
            onClick={copyingID}
            disabled={false}
            className={clsx(cn['collection__info-button'], activeCopy && cn['copied'])}
            text={activeCopy ? 'Copied!' : croppedID}
            type='primary'
            size='lg'
            icon='copy'
          />
          <Button
            className={cn['collection__info-button']}
            text='Follow'
            type='secondary'
            size='lg'
            icon='plus'
          />
        </div>
      </div>

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
          <p className={cn['stats__text']}>Verified</p>
        </div>
      </div>

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
    </div>
  )
}

export default CollectionInfo
