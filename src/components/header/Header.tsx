import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './Header.module.scss'
import HeaderNav from './HeaderNav'
import { spritePath } from '../../helpers/imgPath'
import HeaderNavBar from './HeaderNavBar'
import { rootRoute } from '../../router/routes'

const Header: FC = () => {
  return (
    <header className={cn['header']}>
      <div className={cn['header__container']}>
        <Link to={rootRoute}>
          <div className={cn['header__logo']}>
            <svg className={cn['icon']}>
              <use href={`${spritePath}#storeFront`}></use>
            </svg>
            <h5 className='text-space-h5'>NFT Marketplace</h5>
          </div>
        </Link>

        <HeaderNav />
        <HeaderNavBar />
      </div>
    </header>
  )
}

export default Header
