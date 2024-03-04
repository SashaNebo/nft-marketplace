import { FC } from 'react'
import ContentLoader from 'react-content-loader'

const NftsLoader: FC = props => (
  <ContentLoader
    style={{ width: '100%', height: '100%' }}
    speed={4}
    width={330}
    height={470}
    viewBox='0 0 330 470'
    backgroundColor='#353534'
    foregroundColor='#858585'
    {...props}>
    <rect x='0' y='0' rx='20' ry='20' width='330' height='470' />
  </ContentLoader>
)

export default NftsLoader
