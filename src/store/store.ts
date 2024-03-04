import { configureStore } from '@reduxjs/toolkit'
import collections from './slices/collectionsSlice'

const store = configureStore({
  reducer: {
    collections,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
