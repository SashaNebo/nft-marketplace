import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Form } from '../../components/UI/form/Form'
import { InputField } from '../../components/UI/input/InputField'
import Button from '../../components/UI/buttons/Button'
import { createInputFields, initialLockState } from './additional'
import { useLogin } from '../../hooks/useLogin'
import { FORM_LOGIN } from '../../types/accountTypes/accountTypes'

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
  const passwordProps = watch('password') ? lock : {}

  const showPassword = () => {
    lock.type === 'password' 
      ? setLock(() => ({ type: 'text', rightIcon: 'eye' }))
      : setLock(() => ({ type: 'password', rightIcon: 'eyeSlash' }))
  }

  const login = useLogin(setError)

  return (
    <Form handleSubmit={handleSubmit(login)}>
      <InputField {...inputEmail} />
      <InputField {...inputPassword} {...passwordProps} showPassword={() => showPassword()} />
      <Button
        variant='primary'
        text='login'
        size='md'
        type='submit'
      />
    </Form>
  )
}
   
export { LoginForm }