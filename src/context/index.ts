import { createContext } from 'react'
import { ACCOUNT, ACCOUNT_NFTS_STATE } from '../types/accountTypes/accountTypes'

type ACCOUNT_STATE = {
  account: ACCOUNT
  setAccount: (acc: ACCOUNT) => void
}

export type ACCOUNT_STATE_CONTEXT = React.Context<ACCOUNT_STATE>
export const AccountContext = createContext<ACCOUNT_STATE | null>(null)
export const AuthContext = createContext<boolean>(false)
export const AccountNFTsContext = createContext<ACCOUNT_NFTS_STATE>(null)