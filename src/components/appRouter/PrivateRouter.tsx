import { FC, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { rootRoute } from '../../router/routes'
import { privateRoutes } from '../../router/privateRoutes'

const PrivateRouter: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.pathname.includes(rootRoute)) {
      navigate(`${rootRoute}`)
    }
  }, [location.pathname, navigate])

  return (
    <Routes>
      {privateRoutes.map(({ layout, routes, indexRoute }) => (
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

export { PrivateRouter }
