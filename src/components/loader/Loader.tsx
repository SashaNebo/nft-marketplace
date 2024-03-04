import { FC } from 'react'

import cn from './Loader.module.scss'
import loader from '../../assets/images/loader.svg'

const Loader: FC = () => {
  return (
    <div className={cn['loader']}>
      <img className={cn['loader__spinner']} src={loader} alt='Loading ...' />
    </div>
  )
}

export default Loader
