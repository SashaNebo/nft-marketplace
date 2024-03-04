import { Dispatch, FC } from 'react'
import clsx from 'clsx'

import cn from './Rankings.module.scss'
import { periodList } from '../../utils/collectionsUtils'
import { PERIOD_ACTIONS } from '../../types/collectionsTypes'

type TABS_PROPS = {
  period: PERIOD_ACTIONS
  setPeriod: Dispatch<React.SetStateAction<PERIOD_ACTIONS>>
}

const RankingsTabs: FC<TABS_PROPS> = ({ period, setPeriod }) => {
  return (
    <div className={cn['tabs']}>
      {periodList.map(({ id, text }) => (
        <div
          onClick={() => setPeriod(id)}
          key={id}
          className={clsx(cn['tabs-time'], period === id && cn['active'])}>
          <p className='text-work-h5'>{text}</p>
        </div>
      ))}
    </div>
  )
}

export default RankingsTabs
