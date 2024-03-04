import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/header/Header'

const LayoutHeader: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default LayoutHeader
