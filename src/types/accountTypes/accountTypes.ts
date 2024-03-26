import { GENERAL_STRING } from '../general'

type FORM_SIGN_UP = {
  userName: string
  email: string
  password: string
  confirmPassword: string
}

type FORM_LOGIN = {
  email: string
  password: string
}

type ACCOUNT = {
  id: string
  uid: string
  userName: string
  email: string
  wallets: {
    metamask: boolean,
    walletConnect: boolean,
    coinBase: boolean,
  }
}

type ACCOUNT_REQUEST = Omit<ACCOUNT, 'id'>

type ACCOUNT_ITEMS = {
  id: string
  accountId: string
  nfts: ACCOUNT_NFTS[]
  subscriptions: string[]
}

type ACCOUNT_NFTS = Pick<
  GENERAL_STRING,
  'address' | 'tokenId' | 'collectionName' | 'nftName' | 'nftImageUrl' | 'floorPriceValue'
>

type ACCOUNT_NFTS_STATE = {
  accountNFTs: ACCOUNT_NFTS[]
  setAccountNFTs: (workCase: 'add' | 'remove' | 'clearAll', nft: ACCOUNT_NFTS) => void
} | null

export type {
  FORM_SIGN_UP,
  FORM_LOGIN,
  ACCOUNT,
  ACCOUNT_REQUEST,
  ACCOUNT_ITEMS,
  ACCOUNT_NFTS,
  ACCOUNT_NFTS_STATE,
}
