import { FC } from 'react'
import Button from '../../components/UI/buttons/Button'

import cn from './Login.module.scss'

const LoginSubmitBtn: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <Button
      className={isLoading ? cn['disabled'] : ''}
      variant='primary'
      text='login'
      size='md'
      type='submit'
    />
  )
}

export { LoginSubmitBtn }