import { FC } from 'react'

import cn from './Bag.module.scss'
import { spritePath } from '../../helpers/imgPath'
import { useAccountNFTsState } from '../../hooks/useAccountNFTs'
import { ACCOUNT_NFTS } from '../../types/accountTypes/accountTypes'

interface PROPS {
  setVisibleBag: React.Dispatch<React.SetStateAction<boolean>>
}

const BagHeader: FC<PROPS> = ({ setVisibleBag }) => {
  const { accountNFTs, setAccountNFTs } = useAccountNFTsState()

  return (
    <div className={cn['bag__header']}>
      <div className={cn['bag__header-w']}>
        <h3 className='bag__header-title text-work-h4'>Bag</h3>
        <span className={cn['bag__header-quanity']}>{accountNFTs.length}</span>
      </div>
      <div className={cn['bag__header-w']}>
        <p onClick={() => {
         accountNFTs.length && setAccountNFTs('clearAll', {} as ACCOUNT_NFTS)
        }} className={cn['bag__header-clear']}>Clear all</p>
        <span onClick={() => setVisibleBag(() => false)} className={cn['bag__header-close']}>
          <svg>
            <use href={`${spritePath}#plus`}></use>
          </svg>
        </span>
      </div>
    </div>
  )
}

export { BagHeader }