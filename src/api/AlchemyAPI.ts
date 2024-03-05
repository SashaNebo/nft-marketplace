import ky from 'ky'
import { CONTRACT_METADATA, NFT_METADATA } from '../types/apiTypes/alchemyTypes'

const KEY = 'XhMoskC0anQy5MV8fNHTGgDiaHjaWOaj'
const baseURL = 'https://eth-mainnet.g.alchemy.com/nft/v3' + '/' + KEY

export default class AlchemyAPI {
  static async getNFTMetadata(contractAddress: string, tokenId: string): Promise<NFT_METADATA> {
    const event = 'getNFTMetadata'
    const url = `${baseURL}/${event}`

    const searchParams = { contractAddress, tokenId, refreshCache: false }

    const data: NFT_METADATA = await ky(url, { searchParams }).json()
    return data
  }

  static async getNFTMetadataBatch(tokens: { contractAddress: string; tokenId: string }[]) {
    const event = 'getNFTMetadataBatch'
    const url = `${baseURL}/${event}`

    const body = JSON.stringify({ tokens })

    const data: { nfts: NFT_METADATA[] } = await ky.post(url, { body }).json()
    return data
  }

  static async getContractMetadata(contractAddress: string): Promise<CONTRACT_METADATA> {
    const event = 'getContractMetadata'
    const url = `${baseURL}/${event}`

    const searchParams = { contractAddress }

    const data: CONTRACT_METADATA = await ky(url, { searchParams }).json()
    return data
  }

  static async getContractMetadataBatch(
    contractAddresses: string[]
  ): Promise<{ contracts: CONTRACT_METADATA[] }> {
    const event = 'getContractMetadataBatch'
    const url = `${baseURL}/${event}`

    const body = JSON.stringify({ contractAddresses })

    const data: { contracts: CONTRACT_METADATA[] } = await ky.post(url, { body }).json()
    return data
  }

  static async getNFTsForContract(
    contractAddress: string,
    startToken: number = 0,
    limit: number = 30
  ): Promise<{
    nfts: NFT_METADATA[]
    pageKey: string
  }> {
    const event = 'getNFTsForContract'
    const url = `${baseURL}/${event}`

    const searchParams = {
      contractAddress,
      withMetadata: true,
      startToken,
      limit,
    }

    const data: { nfts: NFT_METADATA[]; pageKey: string } = await ky(url, { searchParams }).json()
    return data
  }

  static async searchContractMetadata(query: string): Promise<{ contracts: CONTRACT_METADATA[] }> {
    const event = 'searchContractMetadata'
    const url = `${baseURL}/${event}`

    const searchParams = { query }

    const data: { contracts: CONTRACT_METADATA[] } = await ky(url, { searchParams }).json()
    return data
  }
}
