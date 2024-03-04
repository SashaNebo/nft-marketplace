import { FC } from 'react'

import { SETTINGS, PERIOD } from '../../types/collectionsTypes.ts'
import TopCollectionsLoader from './TopCollectionsLoader.tsx'
import TopCollectionsListItem from './TopCollectionsListItem.tsx'
import useCollections from '../../hooks/useCollections.ts'

const TopCollectionsList: FC = () => {
  const settings: SETTINGS = {
    period: PERIOD.mounth,
    quantity: 12,
    delay: 1000,
  }

  const [collections, isLoading] = useCollections(settings)

  return (
    <>
      {collections.map((creatorsItem, i) => (
        <TopCollectionsListItem key={i} creatorsItem={creatorsItem} number={++i} />
      ))}

      {isLoading &&
        [...new Array(settings.quantity)].map((_, i) => (
          <div key={i}>
            <TopCollectionsLoader />
          </div>
        ))}
    </>
  )
}

export default TopCollectionsList
