import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './Discover.module.scss'
import useShowCaseNFTs from '../../hooks/useShowCaseNFTs'
import { tokens } from './additional'
import Nfts from '../nfts/Nfts'
import DiscoverLoader from './DiscoverLoader'
import Button from '../UI/button/Button'
import { rootRoute } from '../../router/routes'

const DiscoverNFTs: FC = () => {
  const [nfts, isLoading, error] = useShowCaseNFTs(tokens)

  return (
    <div className={cn['discover-nfts']}>
      {isLoading ? (
        <DiscoverLoader />
      ) : (
        <Nfts nfts={nfts} isLoading={false} errorMessage={error} bg='gray' />
      )}

      <Link
        className={[cn['discover__header-link'], cn['mobile']].join(' ')}
        to={`${rootRoute}/marketplace`}>
        <Button type='secondary' text='see all' size='lg' icon='eye' />
      </Link>
    </div>
  )
}

export default DiscoverNFTs
