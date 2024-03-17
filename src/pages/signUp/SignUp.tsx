import { FC } from 'react'

import cn from './SignUp.module.scss'
import signUpImg from '../../assets/images/signUp-img.png'
import { SignUpForm } from './SignUpForm'

const SignUp: FC = () => {
  return (
    <main className='sign-up'>
      <div className={cn['sign-up__content']}>
        <div className={cn['sign-up__picture']}>
          <img src={signUpImg} alt='' />
        </div>

        <div className={cn['sign-up__account']}>
          <div className={cn['sign-up__account-text']}>
            <h2 className='text-work-h2'>Create account</h2>
            <p className='text-work-body'>
              Welcome! enter your details and start creating, collecting and selling NFTs.
            </p>
          </div>

          <SignUpForm />
        </div>
      </div>
    </main>
  )
}

export { SignUp }