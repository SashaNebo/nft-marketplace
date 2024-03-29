import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './SignUp.module.scss'
import signUpImg from '../../assets/images/signUp-img.png'
import { SignUpForm } from './SignUpForm'
import { AccountCover } from '../../components/accountCover/AccountCover'
import { rootRoute } from '../../router/routes'

const SignUp: FC = () => {
  
  return (
    <AccountCover image={signUpImg}>
      <div className={cn['account']}>
        <div className={cn['account__header']}>
          <h2 className='text-work-h2'>Create account</h2>
          <p className='text-work-body'>
            Welcome! enter your details and start <br/> creating, collecting and selling NFTs.
          </p>
        </div>

        <SignUpForm />
        <div className={cn['have-account']}>
          <p>Have account?</p> <Link to={`${rootRoute}/login`}>Login</Link>
        </div>
      </div>
    </AccountCover>
  )
}

export { SignUp }