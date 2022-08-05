import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const questionApi = createApi({
  reducerPath: 'questionApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.stackexchange.com/2.3/'}),
  endpoints: (builder) => ({
    getQuestion: builder.query({
      query: (date) => ({
        url: `search?pagesize=5&fromdate=${date}&order=desc&sort=votes&intitle=react-redux&site=stackoverflow`
      }),
    }),
  }),
})

export const {useGetQuestionQuery} = questionApi;
