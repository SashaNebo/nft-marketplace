import { FC } from 'react'
import ContentLoader from 'react-content-loader'

import cn from './Trending.module.scss'
const TrendingCardLoader: FC = props => {
  return (
    <div className={cn['trending__content']}>
      {[...new Array(3)].map((_, i) => (
        <ContentLoader
          key={i}
          className={cn['collection-card__loader']}
          speed={2}
          width={330}
          height={445}
          viewBox='0 0 330 445'
          backgroundColor='#353534'
          foregroundColor='#858585'
          {...props}>
          <rect x='0' y='-2' rx='20' ry='20' width='330' height='330' />
          <rect x='1' y='341' rx='20' ry='20' width='100' height='100' />
          <rect x='115' y='341' rx='20' ry='20' width='100' height='100' />
          <rect x='225' y='342' rx='20' ry='20' width='100' height='100' />
        </ContentLoader>
      ))}
    </div>
  )
}

export default TrendingCardLoader
