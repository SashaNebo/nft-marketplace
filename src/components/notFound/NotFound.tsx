import { FC } from 'react'

import cn from './NotFound.module.scss'
import { rootRoute } from '../../router/routes'
import { ButtonLink } from '../UI/buttons/ButtonLink'

const NotFound: FC = () => {
  return (
    <div className={cn['not-found']}>
      <div className={cn['not-found__banner']}></div>
      <ButtonLink
        to={rootRoute}
        className={cn['not-found__button']}
        text='Go Home'
        variant='primary'
        size='xl'
      />
    </div>
  )
}

export default NotFound
