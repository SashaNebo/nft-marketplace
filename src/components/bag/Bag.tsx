import { FC } from 'react'

import cn from './Bag.module.scss'
import { BagHeader } from './BagHeader'
import { BagList } from './BagList'
import { BagCheckout } from './BagCheckout'

interface PROPS {
  setVisibleBag: React.Dispatch<React.SetStateAction<boolean>>
}

const Bag: FC<PROPS> = ({ setVisibleBag }) => {

  return (
    <div  className={cn['bag']}>
      <div className={cn['bag__content']}>
        <BagHeader setVisibleBag={setVisibleBag}/>
        <BagList />

       <BagCheckout/>
      </div>
    </div>
  )
}

export { Bag }
