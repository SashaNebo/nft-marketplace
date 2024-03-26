import ky from 'ky'

import { ACCOUNT, ACCOUNT_REQUEST, ACCOUNT_ITEMS, ACCOUNT_NFTS } from '../types/accountTypes/accountTypes'

const baseURL = 'https://65f8f935df15145246103972.mockapi.io/accounts'

export default class MockAPI {
  static async getAccount(uid: string): Promise<ACCOUNT> {
    const [data]: ACCOUNT[] = await ky.get(`${baseURL}`, { searchParams: { uid } }).json()
    return data
  }

  static async getSubscriptions(id: string) {
    const [data]: ACCOUNT_ITEMS[] = await ky.get(`${baseURL}/${id}/items`).json()
    return data.subscriptions
  }

  static async getNFTs(id: string) {
    const [data]: ACCOUNT_ITEMS[] = await ky.get(`${baseURL}/${id}/items`).json()
    return data.nfts
  }

  static async getWallets(id: string) {
    const [data]: ACCOUNT[] = await ky.get(`${baseURL}/${id}`).json()
    return data.wallets
  }

  static async hasSubscription(id: string, sub: string): Promise<boolean> {
    const currentSubscriptions = await MockAPI.getSubscriptions(id)
    return currentSubscriptions.includes(sub)
  }

  static async addSubscription(id: string, sub: string) {
    const currentSubscriptions = await MockAPI.getSubscriptions(id)
    ky.put(`${baseURL}/${id}/items/${id}`, {
      json: { subscriptions: [...currentSubscriptions, sub] },
    })
  }

  static async removeSubscription(id: string, sub: string) {
    const currentSubscriptions = await MockAPI.getSubscriptions(id)
    const filteringFollowers = currentSubscriptions.filter(f => f !== sub)
    ky.put(`${baseURL}/${id}/items/${id}`, { json: { subscriptions: filteringFollowers } })
  }

  static async createAccount(newAccount: ACCOUNT_REQUEST): Promise<ACCOUNT> {
    const data: ACCOUNT = await ky.post(baseURL, { json: newAccount }).json()
    return data
  }

  static async createItemsForAccount(id: string): Promise<ACCOUNT_ITEMS> {
    const data: ACCOUNT_ITEMS = await ky
      .post(`${baseURL}/${id}/items`, { json: { nfts: [], subscriptions: [] } })
      .json()
    return data
  }

  static async updateAccountNFTs(id: string, nfts: ACCOUNT_NFTS[]) {
    ky.put(`${baseURL}/${id}/items/${id}`, { json: { nfts } })
  }

  static async updateWallets(id: string, wallets: ACCOUNT["wallets"]) {
    ky.put(`${baseURL}/${id}`, { json: { wallets } })
  }
}
