import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './Login.module.scss'
import signInImg from '../../assets/images/signIn-img.png'
import { AccountCover } from '../../components/accountCover/AccountCover'
import { rootRoute } from '../../router/routes'
import { LoginForm } from './LoginForm'

const Login: FC = () => {

  return (
    <AccountCover image={signInImg}>
      <div className={cn['account']}>
        <div className={cn['account__header']}>
          <h2 className='text-work-h2'>Login</h2>
          <p className='text-work-body'>
            Welcome! enter your details and start <br/> creating, collecting and selling NFTs.
          </p>
        </div>

        <LoginForm />
        <div className={cn['have-account']}>
          <p>No account?</p> <Link to={`${rootRoute}/signup`}>SignUp</Link>
        </div>
      </div>
    </AccountCover>
  )
}

export { Login }