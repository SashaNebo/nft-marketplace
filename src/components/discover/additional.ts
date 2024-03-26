import { getRandomNumbers } from '../../helpers/someHelper'
import { TOKEN } from '../../types/apiTypes/alchemyTypes'

const limit: () => number = () => {
  const wiw = window.innerWidth

  if (wiw > 1280) return 3
  if (wiw < 1280 && wiw > 625) return 2
  return 4
}

const addresses = [
  '0xBfE47D6D4090940D1c7a0066B63d23875E3e2Ac5',
  '0x716F29B8972D551294d9E02B3eb0fC1107FbF4aA',
  '0xeEecdE100B55f135A40ca9D92a52BD7723235814',
  '0x9CF0aB1cc434dB83097B7E9c831a764481DEc747',
].filter((_, i) => i < limit())

export const tokens: TOKEN[] = getRandomNumbers(0, 1000, limit()).map((id, i) => ({
  tokenId: id + '',
  contractAddress: addresses[i],
}))
