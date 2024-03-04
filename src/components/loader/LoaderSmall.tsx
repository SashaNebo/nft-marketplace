import { FC } from 'react'

import cn from './Loader.module.scss'
import loader from '../../assets/images/loader.svg'

const LoaderSmall: FC = () => {
  return (
    <div className={cn['loader-xl']}>
      <img className={cn['loader-xl__img']} src={loader} alt='Loading ...' />
    </div>
  )
}

export default LoaderSmall
