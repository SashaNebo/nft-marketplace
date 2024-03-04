import { FC } from 'react'
import cn from './NotFound.module.scss'
import Button from '../../components/UI/buttons/Button'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
  return (
    <div className={cn['not-found']}>
      <div className={cn['not-found__banner']}></div>
      <Link to='/'>
        <Button className={cn['not-found__button']} text='Go Home' type='primary' size='xl' />
      </Link>
    </div>
  )
}

export default NotFound
