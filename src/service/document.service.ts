import { baseApi } from './base-api'

export const documentsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDocuments: builder.query<any, void>({
      query: () => '/ru/data/v3/testmethods/docs/userdocs/get',
    }),
  }),
})
export const { useGetDocumentsQuery } = documentsApi
