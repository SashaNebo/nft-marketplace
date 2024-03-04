import { FC } from 'react'

import { spritePath } from '../../helpers/pathIcons'
import cn from './Header.module.scss'
import { Link } from 'react-router-dom'
import HeaderNav from './HeaderNav'

const Header: FC = () => {
  return (
    <header className={cn['header']}>
      <div className={cn['header__container']}>
        <Link to={'/'}>
          <div className={cn['header__logo']}>
            <svg className={cn['icon']}>
              <use href={`${spritePath.buttonIcons}#storeFront`}></use>
            </svg>
            <h5 className='text-space-h5'>NFT Marketplace</h5>
          </div>
        </Link>

        <HeaderNav />
      </div>
    </header>
  )
}

export default Header
