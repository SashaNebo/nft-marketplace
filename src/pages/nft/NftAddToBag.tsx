import { FC, useContext } from 'react'

import cn from './NFT.module.scss'
import { AuthContext } from '../../context'
import Button from '../../components/UI/buttons/Button'
import { ButtonLink } from '../../components/UI/buttons/ButtonLink'
import { rootRoute } from '../../router/routes'
import { useAccountNFTsState } from '../../hooks/useAccountNFTs'
import { ACCOUNT_NFTS } from '../../types/accountTypes/accountTypes'

const NftAddToBag: FC<{ nft: ACCOUNT_NFTS }> = ({ nft }) => {
  const isAuth = useContext(AuthContext)
  const { accountNFTs, setAccountNFTs } = useAccountNFTsState()
  const haveNFT = accountNFTs.some(
    ({ address, tokenId }) => address + tokenId === nft.address + nft.tokenId
  )

  const handleButtonToBag = () => {
    haveNFT && setAccountNFTs('remove', nft)
    !haveNFT && setAccountNFTs('add', nft)
  }

  return (
    <div>
      {isAuth ? (
        <Button
          onClick={handleButtonToBag}
          className={[cn['nft__button'], haveNFT && cn['active']].join(' ')}
          variant='primary'
          text={haveNFT ? 'remove from bag' : 'add to bag'}
          size='lg'
        />
      ) : (
        <ButtonLink
          to={`${rootRoute}/login`}
          className={cn['nft__button']}
          variant='primary'
          text='add to bag'
          size='lg'
        />
      )}
    </div>
  )
}

export { NftAddToBag }
