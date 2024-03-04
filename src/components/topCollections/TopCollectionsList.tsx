import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './TopCollections.module.scss'
import TopCollectionsLoader from './TopCollectionsLoader.tsx'
import useTopCollections from '../../hooks/useTopCollections.ts'
import { SETTING_TC } from '../../types/componentsTypes/topCollectionsTypes.ts'
import { PERIOD } from '../../types/apiTypes/raribleTypes.ts'
import ErrorMessage from '../error/ErrorMessage.tsx'
import TopCollectionsListItem from './TopCollectionsListItem.tsx'
import Button from '../UI/button/Button.tsx'
import { rootRoute } from '../../router/routes.ts'

const TopCollectionsList: FC = () => {
  const limit = window.innerWidth > 1280 ? 12 : 6

  const setting: SETTING_TC = {
    period: PERIOD.mounth,
    limit,
  }

  const [topCollections, isLoading, error] = useTopCollections(setting)

  return (
    <>
      <div className={cn['collections']}>
        {!isLoading &&
          topCollections.map((collection, i) => (
            <TopCollectionsListItem collection={collection} number={++i} key={collection.address} />
          ))}

        {isLoading &&
          [...new Array(setting.limit)].map((_, i) => (
            <div key={i}>
              <TopCollectionsLoader />
            </div>
          ))}
      </div>

      {error && <ErrorMessage errorMessage={error} />}
      <Link className={cn['top-collections__bottom-link']} to={`${rootRoute}/rankings`}>
        <Button
          className={cn['top-collections__header-button']}
          type='secondary'
          size='lg'
          icon='rocketLaunch'
          text='View Rankings'
        />
      </Link>
    </>
  )
}

export default TopCollectionsList
