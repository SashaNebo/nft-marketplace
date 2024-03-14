import { FC } from 'react'

import cn from './Discover.module.scss'
import useShowCaseNFTs from '../../hooks/useShowCaseNFTs'
import { tokens } from './additional'
import Nfts from '../nfts/Nfts'
import DiscoverLoader from './DiscoverLoader'
import { rootRoute } from '../../router/routes'
import { ButtonLink } from '../UI/buttons/ButtonLink'

const DiscoverNFTs: FC = () => {
  const [nfts, isLoading, error] = useShowCaseNFTs(tokens)

  return (
    <div className={cn['discover-nfts']}>
      {isLoading ? (
        <DiscoverLoader />
      ) : (
        <Nfts nfts={nfts} isLoading={false} errorMessage={error} bg='gray' />
      )}

      <ButtonLink
        to={`${rootRoute}/marketplace`}
        variant='secondary'
        text='see all'
        size='lg'
        icon='eye'
        className={[cn['discover__header-link'], cn['mobile']].join(' ')}
      />
    </div>
  )
}

export default DiscoverNFTs
