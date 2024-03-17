import { FC, ReactNode } from 'react'

import cn from './Form.module.scss'
const Form: FC<{ children: ReactNode, handleSubmit: () => void }> = ({ children, handleSubmit }) => {
  return <form onSubmit={handleSubmit} className={cn['form']}>{children}</form>
}

export { Form }