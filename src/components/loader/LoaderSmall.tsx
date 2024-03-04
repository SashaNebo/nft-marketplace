import { FC } from 'react'
import cn from './Loader.module.scss'

const LoaderSmall: FC = () => {
  return (
    <div className={cn['loader-xl']}>
      <img
        className={cn['loader-xl__img']}
        src='../../../src/assets/images/img-placeholder/loader.svg'
        alt='Loading ...'
      />
    </div>
  )
}

export default LoaderSmall
