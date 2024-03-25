import { rootRoute } from '../../router/routes'

export const navLinks: { text: string; link: string }[] = [
  {
    text: 'Marketplace',
    link: `${rootRoute}/marketplace`,
  },
  {
    text: 'Rankings',
    link: `${rootRoute}/rankings`,
  },
  {
    text: 'Connect a wallet',
    link: `${rootRoute}/connect-wallet`,
  },
]
