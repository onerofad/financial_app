import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accountNo: '',
    to_fname: '',
    to_lname: '',
    to_accountbal: '',
    to_acctId: ''
}

export const accountSlice = createSlice({
    name: 'accounts',

    initialState,

    reducers: {
        updateToAccount: {
            reducer(state, action){
                const acctno = action.payload.acct
                const f_name = action.payload.fname
                const l_name = action.payload.lname
                const t_acctId = action.payload.acctId
                const t_accountbal = action.payload.accountbal
                state.accountNo = acctno
                state.to_fname = f_name
                state.to_lname = l_name
                state.to_acctId = t_acctId
                state.to_accountbal = t_accountbal
            },
            prepare(acct, fname, lname, acctId, accountbal){
                return{
                    payload: {
                        acct: acct,
                        fname: fname,
                        lname: lname,
                        acctId: acctId,
                        accountbal: accountbal
                    }
                }
            }
        },
        updateToAccount2: {
            reducer(state, action){
                const acctno = action.payload.acct
                const f_name = action.payload.fname
                const l_name = action.payload.lname
             
                state.accountNo = acctno
                state.to_fname = f_name
                state.to_lname = l_name
              
            },
            prepare(acct, fname, lname){
                return{
                    payload: {
                        acct: acct,
                        fname: fname,
                        lname: lname,
                     
                    }
                }
            }
        },
        updateTransaction: {
            reducer(state, action) {

            },
            prepare(){
                return{
                    payload: {

                    }
                }
            }

        },

    }
    
})

export const {updateToAccount, updateToAccount2, updateTransaction} = accountSlice.actions
export default accountSlice.reducer