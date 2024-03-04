import { FC } from 'react'
import cn from './Loader.module.scss'

const Loader: FC = () => {
  return (
    <div className={cn['loader']}>
      <img
        className={cn['loader__spinner']}
        src='../../../src/assets/images/img-placeholder/loader.svg'
        alt='Loading ...'
      />
    </div>
  )
}

export default Loader
