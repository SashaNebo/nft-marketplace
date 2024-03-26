import { useContext } from "react"
import { UseFormSetError } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { FirebaseError } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

import { FORM_LOGIN } from "../types/accountTypes/accountTypes"
import MockAPI from "../api/MockAPI"
import { ACCOUNT_STATE_CONTEXT, AccountContext } from "../context"
import { rootRoute } from "../router/routes"

const useLogin = (
  setError: UseFormSetError<FORM_LOGIN>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const navigate = useNavigate()
  const { setAccount } = useContext(AccountContext as ACCOUNT_STATE_CONTEXT)

  const login = async (uid: string) => {
    const account = await MockAPI.getAccount(uid)
    setAccount(account)
    navigate(`${rootRoute}/profile`)
  }

  return async ({ email, password }: FORM_LOGIN) => {
    setIsLoading(() => true)
    const auth = getAuth()
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      login(user.uid)
    } catch (error: unknown) {
      if (error instanceof FirebaseError)
        setError('email', { type: 'validate', message: error.code })
    } finally {
      setIsLoading(() => false)
    }
  }
}

export { useLogin }