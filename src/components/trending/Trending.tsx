import { FC } from 'react'

import cn from './Trending.module.scss'
import Creator from '../UI/author/Author'

const Trending: FC = () => {
  const data: number[] = [...new Array(3)].map((_, i) => i)

  return (
    <section className={cn['trending']}>
      <h3 className='text-work-h3'>Trending Collection</h3>
      <h5 className={cn['trending__subtitle']}>Checkout our weekly updated trending collection.</h5>
      <div className={cn['trending__content']}>
        {data.map(e => (
          <div key={e} className={cn['collection-card']}>
            <div className={cn['collection-card__gallery']}>
              <img
                className={[cn['grid-1'], 'animation-scale'].join(' ')}
                src='https://metadata.degods.com/g/10-dead.png'
                alt='Collection Images'
              />
              <img
                className={[cn['grid-2'], 'animation-scale'].join(' ')}
                src='https://metadata.degods.com/g/63-dead.png'
                alt='Collection Images'
              />
              <img
                className={[cn['grid-3'], 'animation-scale'].join(' ')}
                src='../../../src/assets/images/img-placeholder/animalid.png'
                alt='Collection Images'
              />
              <div className={[cn['grid-4'], 'animation-scale'].join(' ')}>
                <h5 className='text-space-h5'>100+</h5>
              </div>
            </div>

            <Creator
              title='Distant Galaxy'
              nickName='Azuki'
              avatarUrl='https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbWJKaXQxYTlKcDM1RDJBWmRpVGRmTG42SkNYUVNibjFMdzIzN3FaV2ZDTWZl'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Trending
