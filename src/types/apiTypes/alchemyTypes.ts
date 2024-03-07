type CONTRACT_METADATA = {
  address: string
  name: string | null
  totalSupply: string | null
  tokenType: string | null
  openSeaMetadata: OPENSEA_METADATA
}

type OPENSEA_METADATA = {
  bannerImageUrl: string | null
  floorPrice: number | null
  collectionName: string | null
  safelistRequestStatus: string | null
  imageUrl: string | null
  description: string | null
  externalUrl: string | null
  twitterUsername: string | null
  discordUrl: string | null
}

type NFT_METADATA = {
  collection: COLLECTION
  contract: CONTRACT
  image: IMAGE
  tokenType: string | null
  name: string | null
  owners: string | null
  tokenId: string
  raw: RAW
}

interface COLLECTION {
  bannerImageUrl: string | null
  externalUrl: string | null
  name: string | null
}

interface CONTRACT {
  address: string
  symbol: string | null
  totalSupply: string | null
  openSeaMetadata: OPENSEA_METADATA
}

interface IMAGE {
  thumbnailUrl: string | null
  cachedUrl: string | null
  originalUrl: string | null
  pngUrl: string | null
}

interface RAW {
  metadata: {
    description: string | null
    name: string | null
  }
}

type TOKEN = {
  contractAddress: string
  tokenId: string
}

export type { CONTRACT_METADATA, NFT_METADATA, TOKEN }
