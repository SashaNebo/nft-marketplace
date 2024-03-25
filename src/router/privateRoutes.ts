import NotFound from '../components/notFound/NotFound'
import LayoutHeader from '../layout/LayoutHeader'
import LayoutWrapper from '../layout/LayoutWrapper'
import Collection from '../pages/collection/Collection'
import { ConnectWallet } from '../pages/connectWallet/ConnectWallet'
import Home from '../pages/home/Home'
import { Login } from '../pages/login/Login'
import Marketplace from '../pages/marketplace/Marketplace'
import Nft from '../pages/nft/Nft'
import { Profile } from '../pages/profile/Profile'
import Rankings from '../pages/rankings/Rankings'
import { SignUp } from '../pages/signUp/SignUp'
import { rootRoute } from './routes'
import { LAYOUT_ROUTE } from './routes'

const privateLayoutHeaderRoute: LAYOUT_ROUTE = {
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

const privateLayoutWrapperRoute: LAYOUT_ROUTE = {
  layout: {
    path: rootRoute,
    component: LayoutWrapper,
  },

  routes: [
    { path: 'login', component: Login },
    { path: 'signup', component: SignUp },
    { path: 'profile', component: Profile },
    { path: 'connect-wallet', component: ConnectWallet },
  ],

  indexRoute: {
    component: Home,
  },
}

export const privateRoutes = [privateLayoutHeaderRoute, privateLayoutWrapperRoute]
