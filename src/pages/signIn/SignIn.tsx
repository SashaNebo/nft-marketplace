import { FC } from 'react'

import cn from './SignIn.module.scss'
import signInImg from '../../assets/images/signIn-img.png'
import { SignInForm } from './SignInForm'

const SignIn: FC = () => {
  return (
    <main className='sign-in'>
    <div className={cn['sign-in__content']}>
      <div className={cn['sign-in__picture']}>
        <img src={signInImg} alt='' />
      </div>

      <div className={cn['sign-in__account']}>
        <div className={cn['sign-in__account-text']}>
          <h2 className='text-work-h2'>Log in</h2>
          <p className='text-work-body'>
            Welcome! enter your details and start creating, collecting and selling NFTs.
          </p>
        </div>

        <SignInForm/>
      </div>
    </div>
  </main>
  )
}

export { SignIn }