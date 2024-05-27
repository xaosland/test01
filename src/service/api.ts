import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { GetDocumentsResponse, TypeDocument } from './documents.type.ts'

const BASE_URL = 'https://test.v5.pryaniky.com'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: headers => {
    // Получение токена из localStorage
    const token = localStorage.getItem('token')

    if (token) {
      headers.set('x-auth', token)
    }

    return headers
  },
})

export const api = createApi({
  baseQuery,
  endpoints: builder => ({
    deleteDocument: builder.mutation<void, string>({
      query: id => ({
        method: 'DELETE',
        url: `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
      }),
    }),
    getDocuments: builder.query<GetDocumentsResponse, void>({
      query: () => '/ru/data/v3/testmethods/docs/userdocs/get',
    }),
    login: builder.mutation<
      {
        data: any
        token: string
      },
      { password: string; username: string }
    >({
      query: credentials => ({
        body: {
          password: credentials.password,
          username: credentials.username,
        },
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        url: '/ru/data/v3/testmethods/docs/login',
      }),
    }),
    updateDocument: builder.mutation<void, { data: TypeDocument; id: string }>({
      query: ({ data, id }) => ({
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        url: `/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
      }),
    }),
  }),
  reducerPath: 'combinedApi',
})

export const {
  useDeleteDocumentMutation,
  useGetDocumentsQuery,
  useLoginMutation,
  useUpdateDocumentMutation,
} = api
