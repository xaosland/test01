import { HOST } from '@/service/hosts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: HOST,
  prepareHeaders: headers => {
    const token = localStorage.getItem('x-auth')

    if (token) {
      headers.set('x-auth', token)
    }

    return headers
  },
})

export const baseApi = createApi({
  baseQuery: baseQuery,
  endpoints: builder => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Auth'],
})
