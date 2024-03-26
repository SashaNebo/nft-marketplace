import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Form } from '../../components/UI/form/Form'
import { InputField } from '../../components/UI/input/InputField'
import { createInputFields, initialLockState } from './additional'
import { useLogin } from '../../hooks/useLogin'
import { FORM_LOGIN } from '../../types/accountTypes/accountTypes'
import { LoginSubmitBtn } from './LoginSubmitBtn'

const LoginForm: FC = () => {

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<FORM_LOGIN>()

  const { inputEmail, inputPassword } = createInputFields(register, errors)
  const [lock, setLock] = useState({ ...initialLockState });
  const [isLoading, setIsLoading] = useState(false);
  const passwordProps = watch('password') ? lock : {}

  const showPassword = () => {
    lock.type === 'password' 
      ? setLock(() => ({ type: 'text', rightIcon: 'eye' }))
      : setLock(() => ({ type: 'password', rightIcon: 'eyeSlash' }))
  }

  const login = useLogin(setError, setIsLoading)

  return (
    <Form handleSubmit={handleSubmit(login)}>
      <InputField {...inputEmail} />
      <InputField {...inputPassword} {...passwordProps} showPassword={() => showPassword()} />
      <LoginSubmitBtn isLoading={isLoading} />
    </Form>
  )
}
   
export { LoginForm }