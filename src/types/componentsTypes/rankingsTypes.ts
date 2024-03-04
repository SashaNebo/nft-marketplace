import { PERIOD_CASES } from '../apiTypes/raribleTypes'
import { GENERAL_NULL } from '../general'

type SETTING_RANKINGS = {
  period: PERIOD_CASES
  limit: number
  delay: number
}

type RANKINGS = Pick<
  GENERAL_NULL,
  'address' | 'collectionName' | 'floorPricePercent' | 'floorPriceValue' | 'logoUrl' | 'volumeETH'
>

export type { SETTING_RANKINGS, RANKINGS }
