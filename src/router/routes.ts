import Collection from '../pages/collection/Collection'
import Home from '../pages/home/Home'
import Marketplace from '../pages/marketplace/Marketplace'
import Nft from '../pages/nft/Nft'
import Rankings from '../pages/rankings/Rankings'

type PUBLIC_ROUTES = {
  path: string
  component: React.FC
}

export const publicRoutes: PUBLIC_ROUTES[] = [
  { path: '', component: Home },
  { path: '*', component: Home },
  { path: 'rankings', component: Rankings },
  { path: 'collection/:id', component: Collection },
  { path: 'marketplace', component: Marketplace },
  { path: 'nft/:id', component: Nft },
]
