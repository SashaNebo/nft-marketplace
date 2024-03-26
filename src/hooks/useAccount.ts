import { useEffect, useState } from "react"
import { ACCOUNT } from "../types/accountTypes/accountTypes"

const useAccount = () => {
  const [initialAccount, setInitialAccount] = useState<ACCOUNT>({
    id: '',
    uid: '',
    email: '',
    userName: '',
    wallets: {
      metamask: false,
      walletConnect: false,
      coinBase: false
    }
  })

  const localAccount: ACCOUNT | null = JSON.parse(localStorage.getItem('account') as string)

  useEffect(() => {
    if (localAccount) setInitialAccount(() => localAccount)
  }, [])

  const setAccount = (acc: ACCOUNT) => {
    localStorage.setItem('account', JSON.stringify(acc))
    setInitialAccount(() => acc)
  }
  
  return { account: initialAccount, setAccount }
}

export default useAccount