import NotFound from '../components/notFound/NotFound'
import Rankings from '../pages/rankings/Rankings'
import Collection from '../pages/collection/Collection'
import Nft from '../pages/nft/Nft'
import Marketplace from '../pages/marketplace/Marketplace'
import { SignUp } from '../pages/signUp/SignUp'
import { SignIn } from '../pages/signIn/SignIn'

export const rootRoute = '/nft-marketplace'

type ROUTE = {
  path: string
  component: React.FC
}

export const wrappedRoutes: ROUTE[] = [
  { path: '*', component: NotFound },
  {path: `${rootRoute}/sign-up`, component: SignUp },
  {path: `${rootRoute}/sign-in`, component: SignIn },
]

export const headerRoutes: ROUTE[] = [
  { path: `${rootRoute}/rankings`, component: Rankings },
  { path: `${rootRoute}/collection/:id`, component: Collection },
  { path: `${rootRoute}/nft/:id`, component: Nft },
  { path: `${rootRoute}/marketplace`, component: Marketplace },
  { path: `${rootRoute}/sign-up`, component: SignUp },
  { path: '*', component: NotFound },
]
