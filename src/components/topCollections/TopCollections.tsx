import { FC } from 'react'

import cn from './TopCollections.module.scss'
import TopCollectionsHeader from './TopCollectionsHeader'
import TopCollectionsList from './TopCollectionsList'

const TopCollections: FC = () => {
  return (
    <section className={cn['top-collections']}>
      <TopCollectionsHeader />

      <TopCollectionsList />
    </section>
  )
}

export default TopCollections
