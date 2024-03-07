import { getRandomNumbers } from '../../helpers/someHelper'
import { TOKEN } from '../../types/apiTypes/alchemyTypes'

const limit: () => number = () => {
  const wiw = window.innerWidth

  if (wiw > 1280) return 3
  if (wiw < 1280 && wiw > 834) return 2
  else return 1
}

export const addresses = [
  '0x23581767a106ae21c074b2276D25e5C3e136a68b',
  '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
  '0xED5AF388653567Af2F388E6224dC7C4b3241C544',
].filter((_, i) => i < limit())

export type TRENDING_NFTS = {
  address: string
  tokenIds: string[]
  symbol: string | null
  logoUrl: string | null
  collectionName: string | null
  nftImages: (string | null)[]
}

export const arrayTokens: TOKEN[][] = addresses.map(address =>
  getRandomNumbers(0, 1000, 3).map(id => ({
    contractAddress: address,
    tokenId: id + '',
  }))
)

export const trendingPH: TRENDING_NFTS = {
  address: '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
  collectionName: null,
  logoUrl: null,
  nftImages: [null, null, null],
  symbol: null,
  tokenIds: getRandomNumbers(0, 1000, 3).map(n => n + ''),
}
