import { FC } from 'react'
import cn from './Collection.module.scss'
import { COLLECTION_INFO_STRING, CONTRACT_INFO_STRING } from '../../types/collectionsTypes'

type BannerProps = {
  collection: CONTRACT_INFO_STRING
}

const CollectionBanner: FC<BannerProps> = ({ collection }) => {
  const { logo, banner } = collection

  return (
    <div className={cn['collection__banner']}>
      {banner ? (
        <img className={cn['collection__banner-img']} src={banner} alt='' />
      ) : (
        <div className={cn['collection__banner-bg']}></div>
      )}
      <div className='container'>
        <div className={cn['collection__logo']}>
          <img src={logo} alt='' />
        </div>
      </div>
    </div>
  )
}

export default CollectionBanner
