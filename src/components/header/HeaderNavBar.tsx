import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import cn from './Header.module.scss'
import { spritePath } from '../../helpers/imgPath'
import { navLinks } from './additional'
import { ButtonLink } from '../UI/buttons/ButtonLink'
import { rootRoute } from '../../router/routes'

const HeaderNavBar: FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className={cn['nav-bar']}>
      <svg onClick={() => setOpen(prev => !prev)} className={cn['nav-bar__icon']}>
        <use href={`${spritePath}#list`}></use>
      </svg>

      <div className={clsx(cn['nav-bar__list'], open && cn['active'])}>
        {navLinks.map(({ link, text }) => (
          <li className='animation-scale' key={link}>
            <Link onClick={() => setOpen(false)} to={link} className='nav-bar__list-link'>
              {text}
            </Link>
          </li>
        ))}

        <ButtonLink
          onClick={() => setOpen(false)}
          to={`${rootRoute}/sign-up`}
          text='sign up'
          variant='primary'
          size='md'
          className={cn['sign-up']}
        />
      </div>
    </nav>
  )
}

export default HeaderNavBar
