import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import cn from './Header.module.scss'
import HeaderNav from './HeaderNav'
import { spritePath } from '../../helpers/imgPath'
import HeaderNavBar from './HeaderNavBar'
import { rootRoute } from '../../router/routes'
import { Bag } from '../bag/Bag'

const Header: FC = () => {
  const location = useLocation()
  const [visibleBag, setVisibleBag] = useState(false)
  useEffect(() => setVisibleBag(() => false), [location])
  
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

        <HeaderNav setVisibleBag={setVisibleBag}/>
        <HeaderNavBar setVisibleBag={setVisibleBag}/>
        {visibleBag && <Bag setVisibleBag={setVisibleBag} />}
      </div>
    </header>
  )
}

export default Header
