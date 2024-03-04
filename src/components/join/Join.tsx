import { FC } from 'react'
import cn from './Join.module.scss'
import Button from '../UI/buttons/Button'

const Join: FC = () => {
  return (
    <section className={cn['join']}>
      <div className={cn['join__content']}>
        <div className={cn['join__photo']}>
          <img src='../../../src/assets/images/img-placeholder/kosmonavt.png' alt='' />
        </div>

        <div className={cn['join__subscribe']}>
          <h3 className='text-work-h3'>
            Join our weekly <br /> digest
          </h3>
          <p className='text-work-h5'>Get exclusive promotions & updates straight to your inbox.</p>
          <form className={cn['join__form']} action=''>
            <input
              className={cn['join__form-input']}
              type='text'
              placeholder='Enter your email here'
            />
            <Button type='primary' text='Subscribe' size='lg' icon='message' />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Join
