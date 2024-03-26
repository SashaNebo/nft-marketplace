import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Form } from '../../components/UI/form/Form'
import { InputField } from '../../components/UI/input/InputField'
import { FORM_SIGN_UP } from '../../types/accountTypes/accountTypes'
import useSignUp from '../../hooks/useSignUp'
import {
  LOCK_STATE,
  createInputFields,
  initialLockState,
  changePasswordVisible,
} from './additional'
import { SignUpSubmitBtn } from './SignUpSubmitBtn'

const SignUpForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm<FORM_SIGN_UP>({ mode: 'onBlur' })

  const { inputUserName, inputEmail, inputPassword, inputConfirmPassword } = createInputFields(
    register,
    watch,
    errors
  )

  const [lock, setLock] = useState<LOCK_STATE>({ ...initialLockState })
  const [isLoading, setIsLoading] = useState(false);
  const showPassword = changePasswordVisible(lock, setLock)
  const fullReset = () => {
    localStorage.removeItem('account')
    reset()
    setLock(() => ({ ...initialLockState }))
  }

  const passwordProps = watch('password') ? lock.passwordProps : {}
  const confirmPasswordProps = watch('confirmPassword') ? lock.confirmPasswordProps : {}
  const signUp = useSignUp(fullReset, setError, setIsLoading)

  return (
    <Form handleSubmit={handleSubmit(signUp)}>
      <InputField {...inputUserName} />
      <InputField {...inputEmail} />

      <InputField
        {...inputPassword}
        {...passwordProps}
        showPassword={() => showPassword('password')}
      />

      <InputField
        {...inputConfirmPassword}
        {...confirmPasswordProps}
        showPassword={() => showPassword('confirmPassword')}
      />

      <SignUpSubmitBtn isLoading={isLoading} />
    </Form>
  )
}

export { SignUpForm }
