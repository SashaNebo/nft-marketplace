import { FC, useContext } from 'react'

import { PublicRouter } from './PublicRouter'
import { PrivateRouter } from './PrivateRouter'
import { AuthContext } from '../../context'

const AppRouter: FC = () => {
  const isAuth = useContext(AuthContext)

  return (
    <>
      {isAuth && <PrivateRouter />}
      {!isAuth && <PublicRouter />}
    </>
  )
}

export default AppRouter
