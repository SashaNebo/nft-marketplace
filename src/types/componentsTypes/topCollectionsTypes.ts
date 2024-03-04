import { GENERAL_NULL } from '../general'
import { PERIOD_CASES } from '../apiTypes/raribleTypes'

type SETTING_TC = {
  period: PERIOD_CASES
  limit: number
}

type TOP_COLLECTIONS = Pick<GENERAL_NULL, 'address' | 'collectionName' | 'logoUrl' | 'volumeETH'>

export type { SETTING_TC, TOP_COLLECTIONS }
