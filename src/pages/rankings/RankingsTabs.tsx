import { FC } from 'react'
import clsx from 'clsx'

import cn from './Rankings.module.scss'
import { periodListDesktop, periodListMobile } from './additional'
import { PERIOD_CASES } from '../../types/apiTypes/raribleTypes'

type PROPS = {
  period: PERIOD_CASES
  setPeriod: React.Dispatch<React.SetStateAction<PERIOD_CASES>>
}

const RankingsTabs: FC<PROPS> = ({ period, setPeriod }) => {
  const periodList = window.innerWidth > 834 ? periodListDesktop : periodListMobile

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
