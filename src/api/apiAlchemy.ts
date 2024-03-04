import ky from 'ky'
export const getContractMetadataBatch = async <T>(addresses: string[]): Promise<T[]> => {
  const options = {
    method: 'POST',
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: JSON.stringify({
      contractAddresses: addresses,
    }),
  }

  const baseURL = 'https://eth-mainnet.g.alchemy.com/nft/v3'
  const apiKey = 'XhMoskC0anQy5MV8fNHTGgDiaHjaWOaj'
  const method = 'getContractMetadataBatch'

  const data: { contracts: T[] } = await ky.post(`${baseURL}/${apiKey}/${method}`, options).json()
  return data?.contracts
}

// getNftsForContact

export const getNFTsForContract = async <T>(
  address: string,
  limit: number,
  startToken: number = 0
): Promise<T[]> => {
  const baseURL = 'https://eth-mainnet.g.alchemy.com/nft/v3'
  const apiKey = 'XhMoskC0anQy5MV8fNHTGgDiaHjaWOaj'
  const method = 'getNFTsForContract'
  const params = `contractAddress=${address}&withMetadata=true&startToken=${startToken}&limit=${limit}`

  const options = { method: 'GET', headers: { accept: 'application/json' } }
  const data: { nfts: T[] } = await ky(`${baseURL}/${apiKey}/${method}?${params}`, options).json()
  return data.nfts
}

export const searchContractMetadata = async <T>(query: string): Promise<T[]> => {
  const options = { method: 'GET', headers: { accept: 'application/json' } }
  const baseURL = 'https://eth-mainnet.g.alchemy.com/nft/v3'
  const apiKey = 'XhMoskC0anQy5MV8fNHTGgDiaHjaWOaj'
  const method = 'searchContractMetadata'
  const params = `query=${query}`
  const url = `${baseURL}/${apiKey}/${method}?${params}`
  const data: { contracts: T[] } = await ky(url, options).json()
  return data.contracts
}

export const getNFTMetadataBatch = async <T>(tokens): Promise<T[]> => {
  const options = {
    method: 'POST',
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: JSON.stringify({
      tokens,
      refreshCache: false,
    }),
  }

  const baseURL = 'https://eth-mainnet.g.alchemy.com/nft/v3'
  const apiKey = 'XhMoskC0anQy5MV8fNHTGgDiaHjaWOaj'
  const method = 'getNFTMetadataBatch'
  const url = `${baseURL}/${apiKey}/${method}`
  const { nfts }: { nfts: T[] } = await ky.post(url, options).json()
  return nfts
}

export const getContractMetadata = async <T>(address: string): Promise<T> => {
  const options = { method: 'GET', headers: { accept: 'application/json' } }
  const baseURL = 'https://eth-mainnet.g.alchemy.com/nft/v3'
  const apiKey = 'XhMoskC0anQy5MV8fNHTGgDiaHjaWOaj'
  const method = 'getContractMetadata'
  const params = `contractAddress=${address}`
  const url = `${baseURL}/${apiKey}/${method}?${params}`
  const data: T = await ky(url, options).json()
  return data
}

export const getNFTMetadata = async <T>(address: string, tokenID: string): Promise<T> => {
  const options = { method: 'GET', headers: { accept: 'application/json' } }

  const baseURL = 'https://eth-mainnet.g.alchemy.com/nft/v3'
  const apiKey = 'XhMoskC0anQy5MV8fNHTGgDiaHjaWOaj'
  const method = 'getNFTMetadata'
  const params = `contractAddress=${address}&tokenId=${tokenID}&refreshCache=false`
  const url = `${baseURL}/${apiKey}/${method}?${params}`
  const data: T = await ky(url, options).json()
  return data
}
