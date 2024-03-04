import { FC, useEffect, useRef } from 'react'

import cn from './Rankings.module.scss'
import { COLLECTION_INFO, PERIOD_ACTIONS, SETTINGS } from '../../types/collectionsTypes'
import RankingListTop from './RankingsListTop'
import RankingsListItem from './RankingsListItem'
import LoaderSmall from '../../components/loader/LoaderSmall'
import useCollections from '../../hooks/useCollections'

const RankingsList: FC<{ period: PERIOD_ACTIONS }> = ({ period }) => {
  const trackedRef = useRef<HTMLDivElement | null>(null)

  const settings: SETTINGS = {
    period,
    quantity: 20,
    delay: 1000,
  }

  const [collections, isLoading] = useCollections(settings, trackedRef)

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className={cn['rankings-list']}>
      <RankingListTop />

      {collections?.map((rankingItem: COLLECTION_INFO, i) => (
        <RankingsListItem key={rankingItem.id + i} rankingItem={rankingItem} number={++i} />
      )) ?? []}

      <div ref={trackedRef}>
        <div>{isLoading && <LoaderSmall />}</div>
      </div>
    </div>
  )
}

export default RankingsList
