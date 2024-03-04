type GENERAL = MONOLITH & MAJOR

interface MONOLITH {
  address: string
  tokenId: string
}

interface MAJOR {
  logoUrl: string
  collectionName: string
  volumeETH: number
  floorPriceValue: number
  floorPricePercent: number
  bannerUrl: string
  verified: string
  description: string
  twitterUsername: string
  discordUrl: string
  totalSupply: string
  nftImageUrl: string
  nftName: string
  tokenType: string
}

type GENERAL_STRING = TO_STRING<GENERAL>
type GENERAL_NULL = TO_NULL<MAJOR> & MONOLITH
type GENERAL_FUNC = TO_FUNC<GENERAL_NULL>

type TO_STRING<O> = {
  [prop in keyof O]: string
}

type TO_NULL<O> = {
  [prop in keyof O]: O[prop] | null
}

type TO_FUNC<O> = {
  [prop in keyof O]: (value: O[prop]) => string
}

export type { GENERAL, GENERAL_STRING, GENERAL_NULL, GENERAL_FUNC }
export type { TO_STRING }
