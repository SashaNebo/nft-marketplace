import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './Header.module.scss'
import Button from '../UI/button/Button'
import { navLinks } from './additional'

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

      <Button text='sign up' type='primary' size='lg' icon='user' className={cn['sign-up']} />
    </nav>
  )
}

export default HeaderNav
