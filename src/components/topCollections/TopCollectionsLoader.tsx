import ContentLoader, { IContentLoaderProps } from 'react-content-loader'
import { JSX } from 'react/jsx-runtime'

import cn from './TopCollections.module.scss'

const TopCollectionsLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <>
    <ContentLoader
      className={cn['loader']}
      speed={3}
      width={240}
      height={290}
      viewBox='0 0 240 290'
      backgroundColor='#353534'
      foregroundColor='#858585'
      {...props}>
      <rect x='26' y='300' rx='0' ry='0' width='240' height='107' />
      <rect x='-1' y='4' rx='20' ry='20' width='240' height='285' />
    </ContentLoader>

    <ContentLoader
      className={cn['loader-mobile']}
      speed={4}
      width={400}
      height={120}
      viewBox='0 0 400 120'
      backgroundColor='#353534'
      foregroundColor='#858585'
      {...props}>
      <rect x='0' y='0' rx='20' ry='20' width='400' height='120' />
    </ContentLoader>
  </>
)

export default TopCollectionsLoader
