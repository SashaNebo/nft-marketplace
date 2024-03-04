import { PERIOD, PERIOD_CASES } from '../../types/apiTypes/raribleTypes'

const periodListDesktop: { id: PERIOD_CASES; text: string }[] = [
  {
    id: PERIOD.today,
    text: 'Today',
  },
  {
    id: PERIOD.week,
    text: 'This Week',
  },
  {
    id: PERIOD.mounth,
    text: 'This Month',
  },
  {
    id: PERIOD.all,
    text: 'All Time',
  },
]

const periodListMobile: { id: PERIOD_CASES; text: string }[] = [
  {
    id: PERIOD.today,
    text: '1d',
  },
  {
    id: PERIOD.week,
    text: '7d',
  },
  {
    id: PERIOD.mounth,
    text: '30d',
  },
  {
    id: PERIOD.all,
    text: 'All Time',
  },
]

const percentState = (percentValue: string): string[] => {
  let PI = 'default'
  if (+percentValue > 0) PI = 'plus'
  if (+percentValue < 0) PI = 'minus'

  type VARIANTS = {
    plus: string[]
    minus: string[]
    default: string[]
    [key: string]: string[]
  }

  const percentVariants: VARIANTS = {
    plus: [`+${percentValue}%`, 'green'],
    minus: [`${percentValue}%`, 'red'],
    default: [`${percentValue}%`, ''],
  }

  return percentVariants[PI]
}

export { periodListDesktop, periodListMobile, percentState }
