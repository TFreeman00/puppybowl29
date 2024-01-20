import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PuppyBowlApi = createApi({
  reducerPath: "PuppyBowlApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2311-FSA-ET-WEB-FT-SF",
  }),
  endpoints: (builder) => ({
    getPlayers: builder.query({ query: () => `/players` }),
    getPlayer: builder.query({ query: (id) => `/players/` + id }),
    createPlayer: builder.mutation({
      query: (newPlayer) => ({
        url: `/players`,
        method: "POST",
        body: newPlayer,
      }),
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: `/players/` + id,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPlayersQuery,
  useGetPlayerQuery,
  useCreatePlayerMutation,
  useDeletePlayerMutation,
} = PuppyBowlApi;
