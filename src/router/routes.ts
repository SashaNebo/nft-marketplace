import NotFound from '../components/notFound/NotFound'
import Rankings from '../pages/rankings/Rankings'
import Collection from '../pages/collection/Collection'
import Nft from '../pages/nft/Nft'
import Marketplace from '../pages/marketplace/Marketplace'

export const rootRoute = '/nft-marketplace'

type ROUTE = {
  path: string
  component: React.FC
}

export const wrappedRoutes: ROUTE[] = [{ path: '*', component: NotFound }]

export const headerRoutes: ROUTE[] = [
  { path: `${rootRoute}/rankings`, component: Rankings },
  { path: `${rootRoute}/collection/:id`, component: Collection },
  { path: `${rootRoute}/nft/:id`, component: Nft },
  { path: `${rootRoute}/marketplace`, component: Marketplace },
  { path: '*', component: NotFound },
]
