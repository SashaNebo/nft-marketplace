import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

import './api/firebase'
import { AccountContext, AccountNFTsContext, AuthContext } from './context'
import { useAuth } from './hooks/useAuth'
import AppRouter from './components/appRouter/AppRouter'
import useAccount from './hooks/useAccount'
import { useAccountNFTs } from './hooks/useAccountNFTs'

const App: FC = () => {
  const isAuth = useAuth()
  const { account, setAccount } = useAccount()
  const { accountNFTs, setAccountNFTs } = useAccountNFTs()

  return (
    <AuthContext.Provider value={isAuth}>
      <AccountContext.Provider value={{ account, setAccount }}>
        <AccountNFTsContext.Provider value={{ accountNFTs, setAccountNFTs }}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </AccountNFTsContext.Provider>
      </AccountContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
