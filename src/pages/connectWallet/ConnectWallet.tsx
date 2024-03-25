import { FC } from 'react'

import cn from './ConnectWallet.module.scss'
import { AccountCover } from '../../components/accountCover/AccountCover'
import connectWalletImg from '../../assets/images/connectWallet-img.png'
import { ConnectWalletOptions } from './ConnectWalletOptions'

const ConnectWallet: FC = () => {
  return (
    <AccountCover image={connectWalletImg}>
     <div className={cn['account']}>
        <div className={cn['account__header']}>
          <h2 className='text-work-h2'>Create account</h2>
          <p className='text-work-body'>
            Welcome! enter your details and start <br/> creating, collecting and selling NFTs.
          </p>
        </div>

        <ConnectWalletOptions/>
      </div>
   </AccountCover>
  )
}

export { ConnectWallet }