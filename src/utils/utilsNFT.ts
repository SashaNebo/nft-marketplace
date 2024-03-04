import { NFT_INFO, NFT_INFO_STRING } from '../types/typeNFT'

export const placeholderNFT: NFT_INFO_STRING = {
  id: '',
  nameCollection: 'Collection',
  nameNFT: '#NFT',
  logoUrl: '../../../src/assets/images/avatar/negr.png',
  imageUrl: '',
  description: 'Unfortunately, the user did not leave a description',
  discordUrl: '',
  twitterUsername: '',
  floorPrice: 'sold out',
  mintTimeStamp: 'is unknown',
}

export const getNFTInfo = (obj: NFT_INFO): NFT_INFO_STRING => {
  const ph = placeholderNFT
  return {
    id: obj.id,
    nameCollection: obj.nameCollection ?? ph.nameCollection,
    nameNFT: obj.nameNFT ?? ph.nameNFT,
    logoUrl: obj.logoUrl ?? ph.logoUrl,
    imageUrl: obj.imageUrl ?? ph.imageUrl,
    description: obj.description ?? ph.description,
    discordUrl: obj.discordUrl ?? ph.discordUrl,
    twitterUsername: obj.twitterUsername ?? ph.twitterUsername,
    floorPrice: obj.floorPrice?.toFixed(2) ?? ph.floorPrice,
    mintTimeStamp: obj.mintTimeStamp ?? ph.mintTimeStamp,
  }
}
