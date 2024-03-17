import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './Header.module.scss'
import { navLinks } from './additional'
import { ButtonLink } from '../UI/buttons/ButtonLink'
import { rootRoute } from '../../router/routes'

const HeaderNav: FC = () => {
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
      </ul>

      <ButtonLink
        to={`${rootRoute}/sign-up`}
        text='sign up'
        variant='primary'
        size='lg'
        className={cn['sign-up']}
      />
    </nav>
  )
}

export default HeaderNav
