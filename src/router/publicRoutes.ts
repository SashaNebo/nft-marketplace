import { rootRoute } from './routes'
import LayoutHeader from '../layout/LayoutHeader'
import LayoutWrapper from '../layout/LayoutWrapper'
import Marketplace from '../pages/marketplace/Marketplace'
import Rankings from '../pages/rankings/Rankings'
import Collection from '../pages/collection/Collection'
import Nft from '../pages/nft/Nft'
import NotFound from '../components/notFound/NotFound'
import { Login } from '../pages/login/Login'
import { SignUp } from '../pages/signUp/SignUp'
import Home from '../pages/home/Home'
import { LAYOUT_ROUTE } from './routes'

const publicLayoutHeaderRoute: LAYOUT_ROUTE = {
  layout: {
    path: rootRoute,
    component: LayoutHeader,
  },

  routes: [
    { path: 'rankings', component: Rankings },
    { path: 'marketplace', component: Marketplace },
    { path: 'collection/:id', component: Collection },
    { path: 'nft/:id', component: Nft },
    { path: '*', component: NotFound },
  ],
}

const publicLayoutWrapperRoute: LAYOUT_ROUTE = {
  layout: {
    path: rootRoute,
    component: LayoutWrapper,
  },

  routes: [
    { path: 'login', component: Login },
    { path: 'signup', component: SignUp },
    { path: 'profile', component: Login },
    { path: 'connect-wallet', component: Login },
  ],

  indexRoute: {
    component: Home,
  },
}

export const publicRoutes = [publicLayoutHeaderRoute, publicLayoutWrapperRoute]
