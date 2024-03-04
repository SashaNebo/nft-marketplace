import { FC, useState } from 'react'

import cn from './Rankings.module.scss'
import RankingsList from './RankingsList'
import RankingsTabs from './RankingsTabs'
import { PERIOD, PERIOD_CASES } from '../../types/apiTypes/raribleTypes'

const Rankings: FC = () => {
  const [period, setPeriod] = useState<PERIOD_CASES>(PERIOD.today)

  return (
    <main className={cn['rankings']}>
      <div className={cn['container']}>
        <h2 className={[cn['rankings__title'], 'text-work-h2'].join(' ')}>Top Collections</h2>
        <h5 className={cn['rankings__subtitle']}>
          Check out top ranking NFT collections on the NFT Marketplace.
        </h5>

        <RankingsTabs period={period} setPeriod={setPeriod} />
        <RankingsList period={period} />
      </div>
    </main>
  )
}

export default Rankings
