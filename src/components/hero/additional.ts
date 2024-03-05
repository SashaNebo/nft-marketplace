import { GENERAL_STRING } from '../../types/general'

type NFT_HERO = Pick<
  GENERAL_STRING,
  'address' | 'tokenId' | 'collectionName' | 'nftName' | 'logoUrl' | 'nftImageUrl'
>

export const heroNFT: NFT_HERO = {
  address: '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
  tokenId: '332',
  collectionName: 'Pudgy Penguins',
  nftName: 'Pudgy Penguins #332',
  logoUrl:
    'https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?w=500&auto=format',
  nftImageUrl: 'https://nft-cdn.alchemy.com/eth-mainnet/4b5adb66010a5ffbcd100e29974d4851',
}

export type { NFT_HERO }
