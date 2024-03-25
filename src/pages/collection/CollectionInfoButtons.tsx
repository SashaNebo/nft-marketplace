import { FC, useContext, useEffect, useState } from 'react'

import cn from './Collection.module.scss'
import { ACCOUNT_STATE_CONTEXT, AccountContext, AuthContext } from '../../context'
import { copyingId } from './additional'
import { modID } from '../../helpers/someHelper'
import Button from '../../components/UI/buttons/Button'
import { ButtonLink } from '../../components/UI/buttons/ButtonLink'
import { rootRoute } from '../../router/routes'
import MockAPI from '../../api/MockAPI'

const CollectionInfoButtons: FC<{
  address: string
}> = ({ address }) => {
  const isAuth = useContext(AuthContext)
  const { id } = useContext(AccountContext as ACCOUNT_STATE_CONTEXT).account
  const [isSubscription, setIsSubscription] = useState(false)
  const [isCopyId, setIsCopyId] = useState(false)
  const copiedId = copyingId(address, setIsCopyId)
  const croppedID = modID(address)
  
  useEffect(() => {
    if (!address || !isAuth) return
    MockAPI.hasSubscription(id, address).then(haveSub => setIsSubscription(() => haveSub))
  }, [])

  useEffect(() => {
    if (!address || !isAuth) return
    const timeout = setTimeout(async () => {
      const haveSub = await MockAPI.hasSubscription(id, address)
      if (haveSub !== isSubscription) {
        haveSub && MockAPI.removeSubscription(id, address)
        !haveSub && MockAPI.addSubscription(id, address)
      } 
    }, 500)

    return () => clearTimeout(timeout)
  }, [isSubscription])

  return (
    <div className={cn['collection__info-buttons']}>
      <Button
        onClick={copiedId}
        disabled={false}
        className={[['collection__info-button'], isCopyId && cn['copied']].join(' ')}
        text={isCopyId ? 'Copied!' : croppedID}
        variant='primary'
        size='lg'
        icon='copy'
      />

      {isAuth ? (
        <Button
          onClick={() => setIsSubscription(prevIsSub => !prevIsSub)}
          className={[cn['collection__info-button'], isSubscription && cn['active']].join(' ')}
          text='Follow'
          variant='secondary'
          size='lg'
          icon='plus'
        />
      ) : (
        <ButtonLink
          to={`${rootRoute}/login`}
          className={cn['collection__info-button']}
          text='Follow'
          variant='secondary'
          size='lg'
          icon='plus'
        />
      )}
    </div>
  )
}

export { CollectionInfoButtons }
