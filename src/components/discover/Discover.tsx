import { FC } from 'react'
import cn from './Discover.module.scss'
import { Link } from 'react-router-dom'
import Button from '../UI/buttons/Button'
import Nfts from '../nfts/Nfts'

const Discover: FC = () => {
  const nfts = [
    {
      id: '0x0581dDf7A136c6837429a46C6Cb7b388A3E52971',
      tokenId: '867',
      image:
        'https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/f1ad86f602560d8598bdcd371c9399c4',
      name: 'BlockGames Dice #867',
      collectionName: 'BlockGames Dice',
      logo: 'https://i.seadn.io/s/raw/files/2977805d19a49a608d5387ac4bdc24e9.png?w=500&auto=format',
      tokenType: 'ERC721',
      priceValue: 0.399999,
      totalSupply: '5555',
    },
    {
      id: '0xF4ECC1C74D120649f6598C7A217AbaFfdf76Cd4F',
      tokenId: '520',
      image:
        'https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/3d87a11d8357d1d3faa495f22fc8fde7',
      name: 'Dinosty #520',
      collectionName: 'Age of Dino - Dinosty',
      logo: 'https://i.seadn.io/s/raw/files/5913a309a6bd8a2251a5d5094e16dad5.png?w=500&auto=format',
      tokenType: 'ERC721',
      priceValue: 0.72,
      totalSupply: null,
    },
    {
      id: '0xe1dC516B1486Aba548eecD2947A11273518434a4',
      tokenId: '67',
      image:
        'https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/c4ab4c2827c922128bacd6ba3e86d10d',
      name: 'The Grapes',
      collectionName: 'The Grapes',
      logo: 'https://i.seadn.io/gcs/files/39d91be7a3328d2c4655cdf39a08dc71.gif?w=500&auto=format',
      tokenType: 'ERC721',
      priceValue: 0.7199,
      totalSupply: '3333',
    },
  ]

  return (
    <section className={cn['discover']}>
      <div className={cn['discover__header']}>
        <div className={cn['discover__header-wrapper']}>
          <h3 className='text-work-h3'>Discover More NFTs</h3>
          <h5 className={[cn['discover__header-subtitle'], 'text-work-h5'].join('')}>
            Explore new trending NFTs
          </h5>
        </div>
        <Link className={cn['discover__header-link']} to={'/marketplace'}>
          <Button type='secondary' text='see all' size='lg' icon='eye' />
        </Link>
      </div>

      <div className={cn['discover-nfts']}>
        <Nfts loading={false} nfts={nfts} bg='gray' />
      </div>
    </section>
  )
}

export default Discover
