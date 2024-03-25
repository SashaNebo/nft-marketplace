import { FC, useState } from 'react'
import Button from '../../components/UI/buttons/Button'

import cn from './ConnectWallet.module.scss'
import { walletOptions } from './additional'

const ConnectWalletOptions: FC = () => {
  const [wallet, setWallet] = useState<{
    metamask: boolean
    walletConnect: boolean
    coinBase: boolean
    [key: string]: boolean
  }>({
    metamask: false,
    walletConnect: false,
    coinBase: false,
  })

  return (
    <div className={cn['wallet-options']}>
      {walletOptions.map(({ icon, text }) => (
        <Button
          onClick={() => setWallet(prevWallet => ({ ...prevWallet, [icon]: !prevWallet[icon] }))}
          className={[cn['wallet-options__button'], wallet[icon] && cn['active']].join(' ')}
          variant='secondary'
          size='xl'
          icon={icon}
          text={text}
          key={text}
        />
      ))}
    </div>
  )
}

export { ConnectWalletOptions }
