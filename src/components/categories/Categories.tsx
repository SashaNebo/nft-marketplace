import { FC } from 'react'
import cn from './Categories.module.scss'

const Categories: FC = () => {
  const categoriesList: string[] = [
    'art',
    'collectibles',
    'music',
    'photography',
    'video',
    'utility',
    'sport',
    'virtual',
  ]

  return (
    <section className={cn['categories']}>
      <h3 className='text-work-h3'>Browse Categories</h3>
      <div className={cn['categories__cards']}>
        {categoriesList.map(cat => (
          <div key={cat} className={[cn['categories__card'], 'animation-scale'].join(' ')}>
            <div className={cn['categories__card-img']}>
              <img
                className={cn['test']}
                src={`../../../src/assets/images/img-category/${cat}.png`}
                alt=''
              />

              <div className={cn['categories__card-icon']}>
                <img src={`../../../src/assets/images/i-category/${cat}.svg`} alt='' />
              </div>
            </div>
            <div className={cn['categories__card-name']}>
              <h5 className='text-work-h5'>{cat}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
