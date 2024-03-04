import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import AppWrapper from '../../layout/AppWrapper'
import NotFound from '../../pages/notFound/NotFound'
import Loader from '../loader/Loader'
import { publicRoutes } from '../../router/routes'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<AppWrapper />}>
        {publicRoutes.map(route => (
          <Route path={route.path} element={<route.component />} key={route.path} />
        ))}
      </Route>

      <Route path='*' element={<NotFound />} />
      <Route path='/loader' element={<Loader />} />
    </Routes>
  )
}

export default AppRouter
