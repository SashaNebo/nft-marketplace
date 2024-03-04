import { NFTS_INFO, NFTS_INFO_STRING } from '../types/nftsTypes'

type RANDOM_NUMBERS = (min: number, max: number, lot: number) => number[]

export const getRandomNumbers: RANDOM_NUMBERS = (min, max, lot) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  const r = () => Math.floor(Math.random() * (max - min) + min)
  const a: number[] = []

  type UNQUE_A = () => number[]
  const uniqueA: UNQUE_A = () => {
    const u = r()

    !a.includes(u) && a.push(u)
    return a.length === lot ? a : uniqueA()
  }

  return uniqueA()
}

export const getNFTsInfo = (obj: NFTS_INFO): NFTS_INFO_STRING => {
  const ph = placeholderNFTs

  return {
    id: obj.id,
    image: obj.image ?? ph.id,
    name: obj.name ?? ph.name,
    collectionName: obj.collectionName ?? ph.collectionName,
    logo: obj.logo ?? ph.logo,
    tokenType: obj.tokenType ?? ph.tokenType,
    tokenId: obj.tokenId,
    priceValue: obj.priceValue?.toFixed(2) ?? ph.priceValue,
    totalSupply: obj.totalSupply ?? ph.totalSupply,
  }
}

export const placeholderNFTs: NFTS_INFO_STRING = {
  id: '',
  image: '',
  name: '#NFT',
  collectionName: 'Collection',
  logo: '../../../src/assets/images/avatar/negr.png',
  tokenType: 'NNN000',
  priceValue: '-',
  totalSupply: '-',
  tokenId: '',
}

export const tabsList: { id: string; text: string }[] = [
  {
    id: 'nfts',
    text: 'NFTs',
  },
  {
    id: 'collections',
    text: 'Collections',
  },
]
