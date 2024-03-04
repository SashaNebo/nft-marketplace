import { FC, useState } from 'react'
import cn from './Collection.module.scss'
import { spritePath } from '../../helpers/pathIcons'
import Button from '../../components/UI/buttons/Button'
import clsx from 'clsx'
import { modID } from '../../utils/collectionsUtils'
import { CONTRACT_INFO_STRING } from '../../types/collectionsTypes'

type InfoProps = {
  collection: CONTRACT_INFO_STRING
}

const CollectionInfo: FC<InfoProps> = ({ collection }) => {
  const {
    id,
    collectionName,
    description,
    floorPrice,
    totalSupply,
    verified,
    discordUrl,
    twitterUsername,
  } = collection

  const [activeCopy, setActiveCopy] = useState<boolean>(false)

  const croppedID = id && modID(id)

  const copyingID = () => {
    navigator.clipboard
      .writeText(id)
      .then(() => setActiveCopy(true))
      .finally(() => setTimeout(() => setActiveCopy(false), 3000))
  }

  return (
    <div className={cn['collection__info']}>
      <div className={cn['collection__info-top']}>
        <h2 className='collection__nickname text-work-h2'>{collectionName}</h2>
        <div className={cn['collection__info-buttons']}>
          <Button
            onClick={copyingID}
            disabled={activeCopy}
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
        <div>
          <h4 className='stats__value text-space-h4'>{floorPrice}</h4>
          <p className={cn['stats__text']}>Floor price</p>
        </div>
        <div>
          <h4 className='stats__value text-space-h4'>{totalSupply}</h4>
          <p className={cn['stats__text']}>Total supply</p>
        </div>
        <div>
          <h4 className='stats__value text-space-h4'>{verified}</h4>
          <p className={cn['stats__text']}>Verified</p>
        </div>
      </div>

      <div className={cn['additional']}>
        <h5 className='text-space-h5'>Bio</h5>
        <p className='text-work-h5'>{description}</p>
      </div>

      <div className={cn['additional']}>
        <h5 className='text-space-h5'>Links</h5>
        <div className={cn['additional__icons']}>
          <a href={discordUrl} target='_blank'>
            <svg className={cn['additional__icon']}>
              <use href={`${spritePath.buttonIcons}#discordLogo`}></use>
            </svg>
          </a>
          <a href={'https://twitter.com/' + twitterUsername} target='_blank'>
            <svg className={cn['additional__icon-twitter']}>
              <use href={`${spritePath.buttonIcons}#twitterLogo`}></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CollectionInfo
