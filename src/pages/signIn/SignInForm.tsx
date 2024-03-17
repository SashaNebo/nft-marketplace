import { FC, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { Form } from '../../components/UI/form/Form'
import { InputField } from '../../components/UI/input/InputField'
import Button from '../../components/UI/buttons/Button'
import { createInputFields, initialLockState } from './additional'

const SignInForm: FC = () => {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const { inputEmail, inputPassword } = createInputFields(register, errors)
  const [lock, setLock] = useState({ ...initialLockState });
  const passwordProps = watch('password') ? lock : {}

  const showPassword = () => {
    lock.type === 'password' 
      ? setLock(() => ({ type: 'text', rightIcon: 'eye' }))
      : setLock(() => ({ type: 'password', rightIcon: 'eyeSlash' }))
  }

  const onSubmit = (data: FieldValues) => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <InputField {...inputEmail} />
      <InputField {...inputPassword} {...passwordProps} showPassword={() => showPassword()} />
      <Button
        style={{ marginTop: '15px' }}
        variant='primary'
        text='Create account'
        size='md'
        type='submit'
      />
    </Form>
  )
}   
   
export { SignInForm }