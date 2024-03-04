import ky from 'ky'

const baseUrl = 'https://api.rarible.org/v0.1/'

const options = {
  method: 'GET',
  headers: {
    'X-API-KEY': 'ba86ef0c-39be-48f9-91ce-2c2e9a30378e',
    accept: 'application/json',
    blockchain: 'ETHEREUM',
  },
}

export async function getNFTCollectionsVolume<T>(
  limit: number = 1,
  period: string = 'D30',
  continuation = ''
): Promise<T> {
  const nftQuery = 'data/rankings/collections/volume'
  const params = `&period=${period}&sort=VOLUME_USD_DESC&limit=${limit}`
  const continuationString = continuation ? `&continuation=${continuation}` : ''
  const url = `${baseUrl}/${nftQuery}?${params}${continuationString}`
  const data: T = await ky(url, options).json()
  return data
}
