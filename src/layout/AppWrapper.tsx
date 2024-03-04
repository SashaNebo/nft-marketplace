import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const AppWrapper: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppWrapper
