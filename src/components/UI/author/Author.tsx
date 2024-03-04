import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './Author.module.scss'
import { rootRoute } from '../../../router/routes'

type PROPS = {
  id: string
  title: string
  nickName: string
  avatarUrl: string
}

const Author: FC<PROPS> = ({ id, title, nickName, avatarUrl }) => {
  return (
    <div className={cn['author']}>
      <h5 className='text-work-h5'>{title}</h5>
      <Link
        to={`${rootRoute}/collection/${id}`}
        className={[cn['author__block'], 'animation-scale'].join(' ')}>
        <div className={cn['author__block-avatar']}>
          <img src={avatarUrl} alt='' />
        </div>
        <p className='text-space-body'>{nickName}</p>
      </Link>
    </div>
  )
}

export default Author
