import { CreateDeckArgs, Deck, DecksListResponse, GetDecksArgs } from '@/types/table.type'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tableApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      createDecks: builder.mutation<Deck, CreateDeckArgs | void>({
        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/decks',
        }),
      }),
      getDecks: builder.query<DecksListResponse, GetDecksArgs | void>({
        query: args => ({
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),
    }
  },
  reducerPath: 'tableApi',
})

export const { useGetDecksQuery } = tableApi
