import { GENERAL_NULL } from '../general'

type NFT_SHOWCASE = Pick<
  GENERAL_NULL,
  | 'address'
  | 'tokenId'
  | 'collectionName'
  | 'nftName'
  | 'nftImageUrl'
  | 'logoUrl'
  | 'floorPriceValue'
  | 'tokenType'
>

type NFT = Pick<
  GENERAL_NULL,
  | 'address'
  | 'tokenId'
  | 'collectionName'
  | 'nftName'
  | 'nftImageUrl'
  | 'logoUrl'
  | 'floorPriceValue'
  | 'discordUrl'
  | 'twitterUsername'
  | 'description'
>
export type { NFT_SHOWCASE, NFT }
