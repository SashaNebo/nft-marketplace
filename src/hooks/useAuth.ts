import { useContext, useEffect, useState } from "react"
import { ACCOUNT_STATE_CONTEXT, AccountContext } from "../context"

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false)
  const { account } = useContext(AccountContext as ACCOUNT_STATE_CONTEXT) || {account: {
    id: '',
    uid: '',
    email: '',
    userName: '',
  }}

  useEffect(() => {
    if (account.id) return setIsAuth(() => true)
    if (localStorage.getItem('account')) return setIsAuth(() => true)
    setIsAuth(() => false)
  }, [account])

  return isAuth
}

export { useAuth }
