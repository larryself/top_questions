import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const questionApi = createApi({
  reducerPath: 'questionApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.stackexchange.com/2.3/'}),
  endpoints: (builder) => ({
    getQuestion: builder.query({
      query: (date) => ({
        url: `questions?fromdate=${date}&pagesize=5&order=desc&sort=votes&tagged=react-redux&site=stackoverflow`
      }),
    }),
  }),
})

export const {useGetQuestionQuery} = questionApi;