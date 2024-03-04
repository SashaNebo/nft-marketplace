import { FC, useEffect, useRef } from 'react'

import cn from './Rankings.module.scss'
import RankingListTop from './RankingsListTop'
import LoaderSmall from '../../components/loader/LoaderSmall'
import { PERIOD_CASES } from '../../types/apiTypes/raribleTypes'
import { SETTING_RANKINGS } from '../../types/componentsTypes/rankingsTypes'
import useRankings from '../../hooks/useRankings'
import ErrorMessage from '../../components/error/ErrorMessage'
import RankingsListItem from './RankingsListItem'

const RankingsList: FC<{ period: PERIOD_CASES }> = ({ period }) => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const trackedRef = useRef<HTMLDivElement | null>(null)

  const setting: SETTING_RANKINGS = {
    period,
    limit: 20,
    delay: 500,
  }

  const [rankings, isLoading, error] = useRankings(setting, trackedRef)

  return (
    <div className={cn['rankings-list']}>
      <RankingListTop />

      {rankings.map((ranking, i) => (
        <RankingsListItem ranking={ranking} number={++i} key={ranking.address} />
      ))}

      <div ref={trackedRef}>
        <div>{isLoading && <LoaderSmall />}</div>
      </div>

      {error && <ErrorMessage errorMessage={error} />}
    </div>
  )
}

export default RankingsList
