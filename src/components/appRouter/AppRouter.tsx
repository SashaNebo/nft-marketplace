import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import AppWrapper from '../../layout/AppWrapper'
import { headerRoutes, rootRoute } from '../../router/routes'
import { wrappedRoutes } from '../../router/routes'
import NotFound from '../notFound/NotFound'
import LayoutHeader from '../../layout/LayoutHeader'
import Home from '../../pages/home/Home'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={rootRoute} element={<AppWrapper />}>
        <Route index element={<Home />} />
        {wrappedRoutes.map(route => (
          <Route path={route.path} element={<route.component />} key={route.path} />
        ))}
      </Route>

      <Route path={rootRoute} element={<LayoutHeader />}>
        {headerRoutes.map(route => (
          <Route path={route.path} element={<route.component />} key={route.path} />
        ))}
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
