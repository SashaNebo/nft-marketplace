import { FC, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import cn from './Header.module.scss'
import { spritePath } from '../../helpers/imgPath'
import { navLinks } from './additional'
import { ButtonLink } from '../UI/buttons/ButtonLink'
import { rootRoute } from '../../router/routes'
import Button from '../UI/buttons/Button'
import { AuthContext } from '../../context'

interface PROPS {
  setVisibleBag: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderNavBar: FC<PROPS> = ({setVisibleBag}) => {
  const isAuth = useContext(AuthContext)
  const [open, setOpen] = useState(false)
  const navbarRef = useRef<HTMLElement | null>(null)

  const handleOpen = (e: MouseEvent) => {
    const isNavbar = navbarRef.current?.contains(e.target as Node)
    if (!isNavbar) setOpen(() => false)
  }

  useEffect(() => {
    if (!open) return
    window.addEventListener('click', handleOpen)
    return () => window.removeEventListener('click', handleOpen)
  }, [open])

  return (
    <nav ref={navbarRef} className={cn['nav-bar']}>
      <svg
        onClick={() => {
          setOpen(prev => !prev)
          setVisibleBag(() => false)
        }}
        className={cn['nav-bar__icon']}>
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
        {isAuth && (
           <li className='animation-scale' key='profile'>
           <Link onClick={() => setOpen(false)} to={`${rootRoute}/profile`} className='nav-bar__list-link'>
             Profile
           </Link>
         </li>
        )}

        {!isAuth && (
          <ButtonLink
            onClick={() => setOpen(() => false)}
            to={`${rootRoute}/signup`}
            text='sign up'
            variant='primary'
            size='md'
            className={cn['sign-up']}
          />
        )}

        {isAuth && (
          <Button
            onClick={() => {
              setOpen(() => false)
              setVisibleBag(vis => !vis)
            }}
            text='bag'
            variant='primary'
            size='md'
            className={cn['sign-up']}
          />
        )}
      </div>
    </nav>
  )
}

export default HeaderNavBar
