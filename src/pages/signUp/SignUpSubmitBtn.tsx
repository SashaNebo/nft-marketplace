import { FC } from 'react'

import cn from './SignUp.module.scss'
import Button from '../../components/UI/buttons/Button'

const SignUpSubmitBtn: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <Button
      className={isLoading ? cn['disabled'] : ''}
      variant='primary'
      text='Create account'
      size='md'
      type='submit'
    />
  )
}

export { SignUpSubmitBtn }