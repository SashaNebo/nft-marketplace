import {
  COLLECTION_INFO,
  COLLECTION_INFO_STRING,
  PERIOD,
  PERIOD_ACTIONS,
} from '../types/collectionsTypes'

export const getCollectionsInfo = (obj: COLLECTION_INFO): COLLECTION_INFO_STRING => {
  const ph = placeholderCollection

  return {
    id: obj.id ?? ph.id,
    name: obj.name ?? ph.name,
    logo: obj.logo ?? ph.logo,
    priceValue: obj.priceValue?.toFixed(2) ?? ph.priceValue,
    pricePercent: obj.pricePercent?.toFixed(2) ?? ph.pricePercent,
    volume: obj.volume ? formattingNumbers(obj.volume) : ph.volume,
  }
}

export const placeholderCollection: COLLECTION_INFO_STRING = {
  id: '',
  name: 'Collection',
  logo: '../../../src/assets/images/avatar/negr.png',
  priceValue: '-',
  pricePercent: '-',
  volume: '-',
}

export const percentState = (percentValue: string): string[] => {
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
    default: [`${percentValue}`, ''],
  }

  return percentVariants[PI]
}

export const periodList: { id: PERIOD_ACTIONS; text: string }[] = [
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

export const formattingNumbers = (n: number): string => {
  const K = 1000
  const M = K * K
  const B = M * K
  const T = B * K

  const formatList = {
    D: Number(n.toFixed(1)) + '',
    K: Number((n / K).toFixed(1)) + 'K',
    M: Number((n / M).toFixed(1)) + 'M',
    B: Number((n / B).toFixed(1)) + 'B',
  }

  if (n >= 0 && n < K) return formatList.D
  if (n >= K && n < M) return formatList.K
  if (n >= M && n < B) return formatList.M
  if (n >= B && n < T) return formatList.B

  return '-'
}

export const modID = (id: string): string => {
  const l = id.substring(0, 6)
  const r = id.substring(id.length - 4, id.length)

  return l + '...' + r
}
