import { tableApi } from '@/service/table/tabel.service'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(tableApi.middleware),
  reducer: {
    [tableApi.reducerPath]: tableApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
