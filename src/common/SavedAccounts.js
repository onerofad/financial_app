import { Modal, Icon, List, Header } from "semantic-ui-react"
import { useGetSavedAccountQuery } from "../features/api/apiSlice"
import { useDispatch } from "react-redux"
import { updateToAccount2 } from "../features/api/accountSlice"

export const SavedAccounts = ({open, size, close}) => {

    const dispatch_reducer = useDispatch()

    const {data:accounts, isSuccess} = useGetSavedAccountQuery()
    let saved_accounts
    if(isSuccess){
        saved_accounts = accounts.map(acct => (
            <List.Item as="a">
                <List.Header onClick={() => selectAccount(acct.accountnumber, acct.fname, acct.lname)}>
                    {acct.accountnumber + " - " + acct.fname + " " + acct.lname}
                </List.Header>
            </List.Item>
        ))
    }

    const selectAccount = (acctnum, fname, lname) => {
        dispatch_reducer(updateToAccount2(
            acctnum,
            fname,
            lname,
        ))
        close()
    }
    return(
        <Modal
            open={open}
            size={size}
        >
            <Modal.Header>
                Select from saved account
                <Icon onClick={() => close()} style={{float: 'right'}} name="close" />
            </Modal.Header>
            <Modal.Content>
                <List link relaxed size="large">
                    {saved_accounts}
                </List>
            </Modal.Content>
        </Modal>

    )
}

