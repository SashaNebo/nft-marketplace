type COLLECTIONS_VOLUME = {
  continuation: string
  result: COLLECTIONS_VOLUME_RESULT[]
}

type COLLECTIONS_VOLUME_RESULT = {
  id: string
  itemsBought: number | null
  ownersCount: number | null
  volumeNative: { value: number | null }

  floorPrice: {
    changePercent: number | null
    value: number | null
  }
}

type COLLECTION_INFO = {
  id: string
  name: string | null
  logo: string | null
  pricePercent: number | null
  priceValue: number | null
  volume: number | null
}

type COLLECTION_INFO_STRING = {
  id: string
  name: string
  logo: string
  pricePercent: string
  priceValue: string
  volume: string
}

type CONTRACT_INFO = {
  id: string
  banner: string | null
  collectionName: string | null
  description: string | null
  logo: string | null
  discordUrl: string | null
  twitterUsername: string | null
  floorPrice: number | null
  totalSupply: string | null
  verified: string | null
}

type CONTRACT_INFO_STRING = {
  id: string
  banner: string
  collectionName: string
  description: string
  logo: string
  discordUrl: string
  twitterUsername: string
  floorPrice: string
  totalSupply: string
  verified: string
}

type SETTINGS = {
  quantity: number
  delay: number
  period: PERIOD_ACTIONS
}

type PERIOD_ACTIONS = PERIOD.today | PERIOD.week | PERIOD.mounth | PERIOD.all

export const enum PERIOD {
  today = 'D1',
  week = 'D7',
  mounth = 'D30',
  all = 'ALL',
}

type CONTRACT_META_DATA = {
  address: string
  totalSupply: string | null
  openSeaMetadata: OPEN_SEA_META_DATA
}

type OPEN_SEA_META_DATA = {
  floorPrice: number | null
  bannerImageUrl: string | null
  collectionName: string | null
  description: string | null
  imageUrl: string | null
  discordUrl: string | null
  twitterUsername: string | null
  safelistRequestStatus: string | null
}

export type { COLLECTIONS_VOLUME, COLLECTIONS_VOLUME_RESULT }
export type { COLLECTION_INFO, COLLECTION_INFO_STRING, SETTINGS, PERIOD_ACTIONS }
export type { CONTRACT_META_DATA, OPEN_SEA_META_DATA }
export type { CONTRACT_INFO_STRING, CONTRACT_INFO }
