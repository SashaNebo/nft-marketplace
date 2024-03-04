export const enum PERIOD {
  today = 'D1',
  week = 'D7',
  mounth = 'D30',
  all = 'ALL',
}

type PERIOD_CASES = PERIOD.today | PERIOD.week | PERIOD.mounth | PERIOD.all

type NFT_COLLECTIONS_VOLUME = {
  continuation: string
  result: VOLUME_RESULT[]
}

type VOLUME_RESULT = {
  id: string
  volumeNative: {
    value: number | null
  }
  itemsBought: number | null
  floorPrice: {
    value: number | null
    changePercent: number | null
  }
}

export type { PERIOD_CASES, NFT_COLLECTIONS_VOLUME, VOLUME_RESULT }
