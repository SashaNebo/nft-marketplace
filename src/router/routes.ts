export const rootRoute = '/nft-marketplace'

type ROUTE = {
  path: string
  component: React.FC
}

export type LAYOUT_ROUTE = {
  layout: ROUTE
  routes: ROUTE[]
  indexRoute?: {
    component: React.FC
  }
}