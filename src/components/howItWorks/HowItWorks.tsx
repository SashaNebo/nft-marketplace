import { FC } from 'react'
import cn from './HowItWorks.module.scss'

const HowItWorks: FC = () => {
  type CardsListObj = {
    id: string
    title: string
    text: string
  }

  const cardsList: CardsListObj[] = [
    {
      id: 'setup',
      title: 'Setup Your wallet',
      text: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
    },

    {
      id: 'create',
      title: 'Create Collection',
      text: 'Upload your work and setup your collection. Add a description, social links and floor price.',
    },

    {
      id: 'start',
      title: 'Start Earning',
      text: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
    },
  ]

  return (
    <section className={cn['how-it-works']}>
      <h3 className='text-work-h3'>How it works</h3>
      <h5 className='text-work-h5'>Find out how to get started</h5>

      <div className={cn['how-it-works__cards']}>
        {cardsList.map(({ id, title, text }, i) => (
          <div key={id} className={[cn['how-it-works__card'], 'animation-scale'].join(' ')}>
            <div className={cn['how-it-works__card-img']}>
              <img src={`../../../src/assets/images/i-card/card-${++i}.svg`} alt='' />
            </div>

            <h5 className='text-work-h5'>{title}</h5>
            <p className='text-work-body'>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
