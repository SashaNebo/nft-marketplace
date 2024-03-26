import { FC, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import cn from './Profile.module.scss'
import profileImg from '../../assets/images/profile-img.jpg'
import { ButtonLink } from '../../components/UI/buttons/ButtonLink'
import { rootRoute } from '../../router/routes'
import { ACCOUNT_STATE_CONTEXT, AccountContext } from '../../context'
import { AccountCover } from '../../components/accountCover/AccountCover'

const Profile: FC = () => {
  const { account, setAccount } = useContext(AccountContext as ACCOUNT_STATE_CONTEXT)
  const navigate = useNavigate()
  const logout = () => {
    setAccount({
      id: '',
      uid: '',
      email: '',
      userName: '',
      wallets: {
        metamask: false,
        walletConnect: false,
        coinBase: false
      }
    })
    localStorage.removeItem('account')
    navigate(`${rootRoute}/login`)
  }

  return (
    <AccountCover image={profileImg}>
      <div className={cn['account']}>
        <div className={cn['account__header']}>
          <h2 className='text-work-h3'>Hello {account.userName}!</h2>
        </div>

        <div className={cn['have-account']}>
          <p>Need exit?</p> <Link onClick={logout} to={`${rootRoute}/signup`}>SignOut</Link>
        </div>

        <ButtonLink
          className={cn['button']}
          to={`${rootRoute}/marketplace`}
          icon='rocket'
          size='lg'
          variant='secondary'
          text='get started'
        />
      </div>
    </AccountCover>
  )
}

export { Profile }