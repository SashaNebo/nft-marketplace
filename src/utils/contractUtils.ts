import { CONTRACT_INFO, CONTRACT_INFO_STRING } from '../types/collectionsTypes'
import { formattingNumbers } from './collectionsUtils'

export const getContractInfo = (obj: CONTRACT_INFO): CONTRACT_INFO_STRING => {
  const ph = placeholderContractInfo

  return {
    id: obj.id ?? ph.id,
    collectionName: obj.collectionName ?? ph.collectionName,
    logo: obj.logo ?? ph.logo,
    banner: obj.banner?.replace('500', '2000') ?? ph.banner,
    description: obj.description ?? ph.description,
    discordUrl: obj.discordUrl ?? ph.discordUrl,
    twitterUsername: obj.twitterUsername ?? ph.twitterUsername,
    floorPrice: obj.floorPrice?.toFixed(2) ?? ph.floorPrice,
    totalSupply: obj.totalSupply ? formattingNumbers(+obj.totalSupply) : ph.totalSupply,
    verified: obj.verified === 'verified' ? obj.verified : ph.verified,
  }
}

export const placeholderContractInfo: CONTRACT_INFO_STRING = {
  id: '',
  collectionName: 'Collection',
  logo: '../../../src/assets/images/avatar/negr.png',
  banner: '',
  description: 'Unfortunately, the user did not leave a description',
  discordUrl: '',
  twitterUsername: '',
  floorPrice: '-',
  totalSupply: '-',
  verified: 'NO',
}
