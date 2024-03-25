import { FC, ReactNode } from 'react'

import cn from './AccountCover.module.scss'

interface PROPS {
  image: string
  children: ReactNode
}

const AccountCover: FC<PROPS> = ({ image, children }) => {
  return (
    <main>
      <div className={cn['acc-cover__content']}>
        <div className={cn['acc-cover__picture']}>
          <img src={image} alt='' />
        </div>

        <div>{children}</div>
      </div>
    </main>
  )
}

export { AccountCover }