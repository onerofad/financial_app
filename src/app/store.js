import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import accountsReducer from "../features/api/accountSlice"

export default  configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        accounts: accountsReducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlice.middleware)
})