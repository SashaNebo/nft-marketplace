import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { COLLECTION_INFO } from '../../types/collectionsTypes'

type COLLECTIONS_STATE = {
  collections: COLLECTION_INFO[]
}

const initialState: COLLECTIONS_STATE = {
  collections: [],
}

const creatorsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    setCollections(state, action: PayloadAction<COLLECTION_INFO[]>) {
      state.collections = action.payload
    },
  },
})

export const { setCollections } = creatorsSlice.actions
export default creatorsSlice.reducer
