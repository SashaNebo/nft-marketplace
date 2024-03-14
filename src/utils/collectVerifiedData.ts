import { defaultAddress, formattingNumbers } from '../helpers/someHelper'
import { img_PH } from '../helpers/imgPath'
import { GENERAL_NULL, GENERAL_STRING, TO_STRING } from '../types/general'

const toCollectVerifiedData = <O>(obj: O): TO_STRING<O> => {
  const collectVerifiedData: Partial<TO_STRING<O>> = {}

  for (const key in obj) {
    collectVerifiedData[key] = getData(obj[key], key)
  }

  return collectVerifiedData as TO_STRING<O>
}

const getData = (value: GENERAL_NULL[keyof GENERAL_NULL], key: keyof GENERAL_NULL) => {
  const verificationEl = {
    address: v => v,
    tokenId: v => v,
    collectionName: v => v ?? PH.collectionName,
    logoUrl: v => v ?? PH.logoUrl,
    volumeETH: v => (v ? formattingNumbers(v) : PH.volumeETH),
    floorPriceValue: v => v?.toFixed(2) ?? PH.floorPriceValue,
    floorPricePercent: v => v?.toFixed(2) ?? PH.floorPricePercent,
    bannerUrl: v => v?.replace('500', '2000') ?? PH.bannerUrl,
    description: v => v ?? PH.description,
    discordUrl: v => v ?? PH.discordUrl,
    totalSupply: v => (v ? formattingNumbers(+v) : PH.totalSupply),
    twitterUsername: v => v ?? PH.twitterUsername,
    verified: v => (v === 'verified' ? img_PH.verified_PH : PH.verified),
    nftImageUrl: v => v ?? PH.nftImageUrl,
    nftName: v => v ?? PH.nftName,
    tokenType: v => v ?? PH.tokenType,
  }[key]

  return verificationEl(value)
}

const PH: GENERAL_STRING = {
  address: defaultAddress,
  tokenId: '1',
  collectionName: 'Collection',
  logoUrl: img_PH.logo_PH,
  volumeETH: '00.00',
  floorPriceValue: '-',
  floorPricePercent: 'N',
  bannerUrl: '',
  description: 'Unfortunately, the user did not leave a description',
  discordUrl: '',
  totalSupply: 'NN',
  twitterUsername: '',
  verified: img_PH.noVerified_PH,
  nftImageUrl: '',
  nftName: '#NFT',
  tokenType: 'ERC000',
}

export { toCollectVerifiedData }
