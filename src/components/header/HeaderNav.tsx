import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'

import cn from './Header.module.scss'
import { navLinks } from './additional'
import { ButtonLink } from '../UI/buttons/ButtonLink'
import { rootRoute } from '../../router/routes'
import Button from '../UI/buttons/Button'
import { AuthContext } from '../../context'
import { useAccountNFTsState } from '../../hooks/useAccountNFTs'

interface PROPS {
  setVisibleBag: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderNav: FC<PROPS> = ({ setVisibleBag }) => {
  const isAuth = useContext(AuthContext)
  const quanityBag = useAccountNFTsState().accountNFTs.length

  return (
    <nav className={cn['nav']}>
      <ul className={cn['nav-list']}>
        {navLinks.map(navLink => (
          <li key={navLink.link} className={cn['nav-item']}>
            <Link to={navLink.link}>
              <span className={cn['nav-link']}>{navLink.text}</span>
            </Link>
          </li>
        ))}

        {isAuth && (
          <li key='profile' className={cn['nav-item']}>
            <Link to={`${rootRoute}/profile`}>
              <span className={cn['nav-link']}>Profile</span>
            </Link>
          </li>
        )}
      </ul>

      <>
        {isAuth && (
          <Button
            onClick={() => setVisibleBag(vis => !vis)}
            icon='bag'
            text={`Bag ${quanityBag ? quanityBag : ''}`}
            variant='primary'
            size='lg'
            className={cn['auth-btn']}
          />
        )}

        {!isAuth && (
          <ButtonLink
            to={`${rootRoute}/signup`}
            text='sign up'
            variant='primary'
            size='lg'
            className={cn['sign-up']}
          />
        )}
      </>
    </nav>
  )
}

export default HeaderNav
