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
        }),
        editAccount: builder.mutation({
            query: account => ({
                url: `/users/${account.id}/`,
                method: 'PATCH',
                body: account
            })
        }),
        getTransferHistory: builder.query({
            query: () => 'transferhistorys'
        }),
        saveAccount: builder.mutation({
            query: initialPost => ({
                url: 'saveaccounts/',
                method: 'POST',
                body: initialPost
            })
        }),
        getSavedAccount: builder.query({
            query: () => 'saveaccounts'
        })
    })
})

export const {
            useRegisterMutation,
            useGetusersQuery,
            useLocalTransferMutation,
            useEditAccountMutation,
            useGetTransferHistoryQuery,
            useSaveAccountMutation,
            useGetSavedAccountQuery
        
            
        } = apiSlice