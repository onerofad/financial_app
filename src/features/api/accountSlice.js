import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accountNo: ''
}

export const accountSlice = createSlice({
    name: 'accounts',

    initialState,

    reducers: {
        updateToAccount: {
            reducer(state, action){
                const acctno = action.payload.acct
                state.accountNo = acctno
            },
            prepare(acct){
                return{
                    payload: {
                        acct: acct
                    }
                }
            }
        }

    }
    
})

export const {updateToAccount} = accountSlice.actions
export default accountSlice.reducer