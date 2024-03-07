import { FC } from 'react'
import ContentLoader, { IContentLoaderProps } from 'react-content-loader'

import cn from './Discover.module.scss'

const DiscoverLoader: FC<IContentLoaderProps> = props => {
  return (
    <div className={cn['card__loader']}>
      {[...new Array(3)].map((_, i) => (
        <ContentLoader
          className={cn['card__loader-item']}
          key={i}
          speed={3}
          width={330}
          height={470}
          viewBox='0 0 330 470'
          backgroundColor='#353534'
          foregroundColor='#858585'
          {...props}>
          <rect x='0' y='0' rx='20' ry='20' width='330' height='470' />
        </ContentLoader>
      ))}
    </div>
  )
}

export default DiscoverLoader
