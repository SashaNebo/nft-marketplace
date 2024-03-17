import { FC, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import cn from './SignUp.module.scss'
import Button from '../../components/UI/buttons/Button'
import { Form } from '../../components/UI/form/Form'
import { InputField } from '../../components/UI/input/InputField'
import { LOCK_STATE, createInputFields, initialLockState, changePasswordVisible } from './additional'
import { rootRoute } from '../../router/routes'

const SignUpForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const { inputUserName, inputEmail, inputPassword, inputConfirmPassword } = createInputFields(
    register,
    watch,
    errors
  )

  const [lock, setLock] = useState<LOCK_STATE>({ ...initialLockState });
  const showPassword = changePasswordVisible(lock, setLock)
  
  const passwordProps = watch('password') ? lock.passwordProps : {}
  const confirmPasswordProps = watch('confirmPassword') ? lock.confirmPasswordProps : {}

  const onSubmit = (data: FieldValues) => {
    alert(JSON.stringify(data))
    setLock(() => ({...initialLockState}))
    reset()
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
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

      <Button
        style={{ marginTop: '15px' }}
        variant='primary'
        text='Create account'
        size='md'
        type='submit'
      />

      <Link to={`${rootRoute}/sign-in`} className={cn['sign-in__link']}>or Sign In</Link>
    </Form>
  )
}

export { SignUpForm }
