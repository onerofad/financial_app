import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', 

   baseQuery: fetchBaseQuery({baseUrl: 'https://backend-app-pied.vercel.app/api'}),
   //  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api'}),

    endpoints: builder => ({
        register: builder.mutation({
            query: initialPost => ({
                url: 'users/',
                method: 'POST',
                body: initialPost
            })
        }),
        getusers: builder.query({
            query: () => 'users'
        }),
        localTransfer: builder.mutation({
            query: initialPost => ({
                url: 'localtransfers/',
                method: 'POST',
                body: initialPost
            })
        })
    })
})

export const {
            useRegisterMutation,
            useGetusersQuery,
            useLocalTransferMutation
        } = apiSlice