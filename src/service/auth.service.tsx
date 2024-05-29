import { baseApi } from './base-api'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<void, void>({
      providesTags: ['Auth'],
      query: () => `/ru/data/v3/testmethods/docs/login`,
    }),
    login: builder.mutation({
      invalidatesTags: ['Auth'],
      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled

        localStorage.setItem('x-auth', data.data.token.trim())
      },
      query: body => ({
        body,
        method: 'POST',
        url: `/ru/data/v3/testmethods/docs/login`,
      }),
    }),
  }),
})
export const useGetMeQuery = () => authApi.useGetMeQuery()
export const useLoginMutation = () => authApi.useLoginMutation()
