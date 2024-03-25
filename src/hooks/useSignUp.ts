import { useContext } from "react"
import { UseFormSetError } from "react-hook-form"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { FirebaseError } from "firebase/app"

import { ACCOUNT_REQUEST, FORM_SIGN_UP } from "../types/accountTypes/accountTypes"
import MockAPI from "../api/MockAPI"
import { ACCOUNT_STATE_CONTEXT, AccountContext } from "../context"
import { rootRoute } from "../router/routes"

type SET_ERROR = UseFormSetError<FORM_SIGN_UP>

const useSignUp = (fullReset: () => void, setError: SET_ERROR) => {
  const navigate = useNavigate()
  const {setAccount} = useContext(AccountContext as ACCOUNT_STATE_CONTEXT)
  
  const createMockApiAccount = async (newAccount: ACCOUNT_REQUEST) => {
    const account = await MockAPI.createAccount(newAccount)
    MockAPI.createItemsForAccount(account.id)

    setAccount(account)
    navigate(`${rootRoute}/profile`)
  }

  return async ({ userName, email, password }: FORM_SIGN_UP) => {
    const auth = getAuth()
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      createMockApiAccount({ uid: user.uid, email, userName })
      fullReset()
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setError('email', { type: 'validate', message: error?.code })
      }
    }
  }
}

export default useSignUp