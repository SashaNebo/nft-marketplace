import { FC, useEffect, useRef } from 'react'

import cn from './Collection.module.scss'
import { spritePath } from '../../helpers/pathIcons'
import CollectionTab from './CollectionTab'
import Nfts from '../../components/nfts/Nfts'
import CollectionBanner from './CollectionBanner'
import CollectionInfo from './CollectionInfo'
import { useParams } from 'react-router-dom'
import { CONTRACT_INFO_STRING } from '../../types/collectionsTypes'
import useContract from '../../hooks/useContract'
import Loader from '../../components/loader/Loader'
import NotFound from '../notFound/NotFound'
import { getContractInfo, placeholderContractInfo } from '../../utils/contractUtils'
import { CREATED_NFTS_SETTINGS } from '../../types/nftsCreatedTypes'
import { getRandomNumbers } from '../../utils/nftsUtils'
import useCreatedNFTs from '../../hooks/useCreatedNFTs'

const Collection: FC = () => {
  const { id: paramID } = useParams()

  useEffect(() => {
    return () => window.scroll(0, 0)
  }, [])

  const [contractData, loading, error] = useContract(paramID || '')

  const contractInfo: CONTRACT_INFO_STRING = contractData
    ? getContractInfo(contractData)
    : placeholderContractInfo

  const settings: CREATED_NFTS_SETTINGS = {
    address: paramID || '',
    randomStartTokens: getRandomNumbers(0, 5000, 30),
  }

  const trackedRef = useRef<HTMLDivElement | null>(null)
  const [nftsCreated, loadingCreated, errorCreated] = useCreatedNFTs(settings, trackedRef)

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

  if (error) return <NotFound />
  if (loading) return <Loader />

  return (
    <main className={cn['collection']}>
      <CollectionBanner collection={contractInfo} />

      <div className='container'>
        <CollectionInfo collection={contractInfo} />
      </div>

      <div className={cn['devider']}>
        <svg className={cn['devider__icon']}>
          <use href={`${spritePath.buttonIcons}#line`}></use>
        </svg>
      </div>

      <div className='container'>
        <CollectionTab />
      </div>

      <div className={cn['collection__nfts']}>
        <Nfts loading={loadingCreated} nfts={nftsCreated} />
        <div ref={trackedRef}></div>
      </div>
    </main>
  )
}

export default Collection
