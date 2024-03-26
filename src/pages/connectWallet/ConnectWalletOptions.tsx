import { FC, useEffect, useState } from 'react'
import Button from '../../components/UI/buttons/Button'

import cn from './ConnectWallet.module.scss'
import { walletOptions } from './additional'
import MockAPI from '../../api/MockAPI'
import useAccount from '../../hooks/useAccount'

const ConnectWalletOptions: FC = () => {
  const {id} = useAccount().account
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

  useEffect(() => {
    MockAPI.getWallets(id).then(walletState => setWallet(() => walletState))
  }, [])

  useEffect(() => {
    if (!id) return
    MockAPI.updateWallets(id, wallet)
  }, [wallet])

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
