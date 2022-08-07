import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const questionApi = createApi({
	reducerPath: "questionApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.stackexchange.com/2.3/" }),
	endpoints: (builder) => ({
		getQuestion: builder.query({
			query: (timestamp: number) => ({
				// stackoverflow waits date in seconds
				url: `search?pagesize=5&fromdate=${
					timestamp / 1000
				}&order=desc&sort=votes&intitle=react-redux&site=stackoverflow`,
			}),
		}),
	}),
});

export const { useGetQuestionQuery } = questionApi;
