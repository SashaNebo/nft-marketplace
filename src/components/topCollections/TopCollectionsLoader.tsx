import ContentLoader, { IContentLoaderProps } from 'react-content-loader'
import { JSX } from 'react/jsx-runtime'

const TopCollectionsLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    style={{ width: '100%', height: '100%' }}
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
)

export default TopCollectionsLoader
