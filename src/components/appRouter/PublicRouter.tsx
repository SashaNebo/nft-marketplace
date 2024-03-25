import { FC, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { publicRoutes } from '../../router/publicRoutes'
import { rootRoute } from '../../router/routes'

const PublicRouter: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.pathname.includes(rootRoute)) {
      navigate(`${rootRoute}`)
    }

    // if (location.pathname === '/nft-marketplace/profile') navigate(`${rootRoute}/login`)
    // if (location.pathname === '/nft-marketplace/connect-wallet') navigate(`${rootRoute}/login`)
  }, [location.pathname, navigate])

  return (
    <Routes>
    {publicRoutes.map(({ layout, routes, indexRoute }) => (
      <Route key={layout.component + ''} path={layout.path} element={<layout.component />}>
        <>
          {indexRoute && <Route index element={<indexRoute.component />} />}
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </>
      </Route>
    ))}
  </Routes>
  )
}

export { PublicRouter }