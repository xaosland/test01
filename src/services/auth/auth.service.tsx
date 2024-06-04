import { DecksListResponse } from '@/types/table.type'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksListResponse, void>({
        query: () => `v2/decks`,
      }),
    }
  },
  reducerPath: 'authApi',
})

export const { useGetDecksQuery } = authApi