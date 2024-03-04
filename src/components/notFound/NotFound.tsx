import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './NotFound.module.scss'
import Button from '../UI/button/Button'
import { rootRoute } from '../../router/routes'

const NotFound: FC = () => {
  return (
    <div className={cn['not-found']}>
      <div className={cn['not-found__banner']}></div>
      <Link to={rootRoute}>
        <Button className={cn['not-found__button']} text='Go Home' type='primary' size='xl' />
      </Link>
    </div>
  )
}

export default NotFound
