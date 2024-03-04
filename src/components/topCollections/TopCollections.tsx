import { FC } from 'react'

import cn from './TopCollections.module.scss'
import TopCollectionsList from './TopCollectionsList'
import TopCollectionsHeader from './TopCollectionsHeader'

const TopCollections: FC = () => {
  return (
    <section className={cn['top-collections']}>
      <TopCollectionsHeader />

      <div className={cn['collections']}>
        <TopCollectionsList />
      </div>
    </section>
  )
}

export default TopCollections
