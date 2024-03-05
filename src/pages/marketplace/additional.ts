import { getRandomNumbers } from '../../helpers/someHelper'
import { PERIOD, PERIOD_CASES } from '../../types/apiTypes/raribleTypes'

type SETTING = {
  period: PERIOD_CASES
  delay: number
  addressesLimit: number
  addressesIndexes: number[]
  nftsStartTokens: number[]
}

export const getSetting: () => SETTING = () => ({
  period: PERIOD.mounth,
  delay: 500,
  addressesLimit: 200,
  addressesIndexes: getRandomNumbers(0, 200, 30),
  nftsStartTokens: getRandomNumbers(0, 1000, 30),
})

export type { SETTING }
