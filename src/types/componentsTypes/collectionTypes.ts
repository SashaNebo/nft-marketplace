import { GENERAL_NULL } from '../general'

type COLLECTION = Pick<
  GENERAL_NULL,
  | 'address'
  | 'collectionName'
  | 'logoUrl'
  | 'bannerUrl'
  | 'description'
  | 'discordUrl'
  | 'floorPriceValue'
  | 'twitterUsername'
  | 'verified'
  | 'totalSupply'
>

export type { COLLECTION }
