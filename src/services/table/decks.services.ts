import { baseApi } from '@/services/app/baseApi.service'
import {
  CreateDeckArgs,
  Deck,
  DecksListResponse,
  DeleteDeckArgs,
  GetDecksArgs,
  UpdateDeckArgs,
} from '@/types/table.type'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDecks: builder.mutation<Deck, CreateDeckArgs | void>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/decks',
        }),
      }),
      delDecks: builder.mutation<void, DeleteDeckArgs>({
        invalidatesTags: ['Decks'],
        query({ id }) {
          return {
            method: 'DELETE',
            url: `/v1/decks/${id}`,
          }
        },
      }),
      getDecks: builder.query<DecksListResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),
      updateDecks: builder.mutation<Deck, UpdateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...body }) => ({
          body,
          method: 'PATCH',
          url: `/v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDecksMutation,
  useDelDecksMutation,
  useGetDecksQuery,
  useUpdateDecksMutation,
} = decksService
