import { PERIOD_ACTIONS } from './collectionsTypes'

type NFTS_INFO = {
  id: string
  tokenId: string
  image: string | null
  name: string | null
  collectionName: string | null
  logo: string | null
  tokenType: string | null
  priceValue: number | null
  totalSupply: string | null
}

type NFTS_INFO_STRING = {
  id: string
  tokenId: string
  image: string
  name: string
  collectionName: string
  logo: string
  tokenType: string
  priceValue: string
  totalSupply: string
}

type NFTS_SETTINGS = {
  period: PERIOD_ACTIONS
  delay: number
  addressesLimit: number
  addressesIndexes: number[]
  nftsStartTokens: number[]
}

type NFTS_FOR_CONTRACT = {
  contract: NFTS_CONTRACT
  image: NFTS_IMAGE
  name: string
  tokenId: string
}

type NFTS_CONTRACT = {
  address: string
  name: string | null
  openSeaMetadata: NFTS_OPEN_SEA_META_DATA
  tokenType: string | null
  totalSupply: string
}

type NFTS_OPEN_SEA_META_DATA = {
  floorPrice: number | null
  imageUrl: string | null
}

type NFTS_IMAGE = {
  originalUrl: string | null
  cachedUrl: string | null
  pngUrl: string | null
  thumbnailUrl: string | null
}

export type { NFTS_INFO, NFTS_SETTINGS }
export type {
  NFTS_OPEN_SEA_META_DATA,
  NFTS_IMAGE,
  NFTS_FOR_CONTRACT,
  NFTS_CONTRACT,
  NFTS_INFO_STRING,
}
