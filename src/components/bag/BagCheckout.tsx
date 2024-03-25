import { FC, useEffect, useState } from 'react'
import clsx from 'clsx'

import cn from './Bag.module.scss'
import Button from '../UI/buttons/Button'
import { useAccountNFTsState } from '../../hooks/useAccountNFTs'
import { ACCOUNT_NFTS } from '../../types/accountTypes/accountTypes'

const BagCheckout: FC = () => {
  const { accountNFTs, setAccountNFTs } = useAccountNFTsState()
  const [success, setSuccess] = useState(false)

  const summ = accountNFTs.reduce((acc, { floorPriceValue }) => (acc += +floorPriceValue || 0), 0)
  const quanity = accountNFTs.length
  
  const checkout = () => {
    setSuccess(() => true)
    setAccountNFTs('clearAll', {} as ACCOUNT_NFTS)
  }

  useEffect(() => {
    if (!success) return
    const timeout = setTimeout(() => setSuccess(() => false), 2000)
    return () => {
      clearTimeout(timeout)
      setSuccess(() => false)
    }
  }, [success])

  const btnStyles = clsx(
    !quanity && !success && cn['bag__buy-disabled'],
    success && cn['bag__buy-success']
  )

  const btnText = clsx(
    success && 'Success!',
    quanity && `Buy for ${summ.toFixed(2)} ETH`,
    !quanity && !success && 'not available'
  )

  return (
    <div className={cn['bag__buy']}>
      <Button className={btnStyles} onClick={checkout} disabled={quanity ? false : true} size='lg' variant='secondary' text={btnText} />
    </div>
  )
}

export { BagCheckout }