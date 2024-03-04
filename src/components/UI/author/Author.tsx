import { FC } from 'react'
import cn from './Author.module.scss'
import { Link } from 'react-router-dom'

type CreatorProps = {
  id: string
  title: string
  nickName: string
  avatarUrl: string
}

const Author: FC<CreatorProps> = ({ id, title, nickName, avatarUrl }) => {
  return (
    <div className={cn['author']}>
      <h5 className='text-work-h5'>{title}</h5>
      <Link className={[cn['author__block'], 'animation-scale'].join(' ')} to={`/collection/${id}`}>
        <div className={cn['author__block-avatar']}>
          <img src={avatarUrl} alt='' />
        </div>
        <p className='text-space-body'>{nickName}</p>
      </Link>
    </div>
  )
}

export default Author
