type NFT_META_DATA = {
  collection: COLLECTION
  contract: CONTRACT
  description: string | null
  image: IMAGE
  name: string | null
  mint: MINT
  tokenId: string
}

interface COLLECTION {
  bannerImageUrl: string | null
  name: string | null
}

interface CONTRACT {
  address: string
  name: string | null
  totalSupply: string | null
  openSeaMetadata: OPEN_SEA_META_DATA
}

interface OPEN_SEA_META_DATA {
  bannerImageUrl: string | null
  collectionName: string | null
  description: string | null
  imageUrl: string | null
  floorPrice: number | null
  discordUrl: string | null
  twitterUsername: string | null
  safelistRequestStatus: string | null
}
interface IMAGE {
  cachedUrl: string | null
  originalUrl: string | null
  pngUrl: string | null
  thumbnailUrl: string | null
}

interface MINT {
  timestamp: string | null
}

type NFT_INFO = {
  id: string
  nameCollection: string | null
  nameNFT: string | null
  logoUrl: string | null
  imageUrl: string | null
  description: string | null
  discordUrl: string | null
  twitterUsername: string | null
  floorPrice: number | null
  mintTimeStamp: string | null
}

type NFT_INFO_STRING = {
  id: string
  nameCollection: string
  nameNFT: string
  logoUrl: string
  imageUrl: string
  description: string
  discordUrl: string
  twitterUsername: string
  floorPrice: string
  mintTimeStamp: string
}

export type { NFT_META_DATA, NFT_INFO, NFT_INFO_STRING }
