import { useEffect, useReducer, useState } from "react"
import { Modal, Form, Header, Accordion, Icon, List, Input, Button, Segment, TextArea, Checkbox } from "semantic-ui-react"
import { useGetusersQuery, useSaveAccountMutation } from "../features/api/apiSlice"
import { useDispatch } from "react-redux"
import { saveBeneficiaryAccount, updateToAccount } from "../features/api/accountSlice"
import { SavedAccounts } from "./SavedAccounts"

const initialState = {
    open_new_beneficiary: false,
    size_new_beneficiary: undefined,
    open_saved_account: false,
    size_saved_account: undefined

}

function modalReducer(state, action){
    switch(action.type){
        case 'open':
            return {open_new_beneficiary: true, size_new_beneficiary: action.size_new_beneficiary}    
        case 'open_saved_account':
            return {open_saved_account: true, size_saved_account: action.size_saved_account}
        case 'close':
            return {open_new_beneficiary: false, open_saved_account: false}
        default:
            return new Error("Unexpected Error")
    }
}
export const DestinationModal = ({open, size, close}) => {

    useEffect(() => {
        searchAccount()
    })
    const [acctnum, setacctnum] = useState('')
    const [continue_btn, setcontinue_btn] = useState(false)
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [accountno, setaccountno] = useState('')
    const [loading, setloading] = useState(false)
    const [acctId, setacctId] = useState('')
    const [accountbal, setaccountbal] = useState('')

    const dispatch_reducer = useDispatch()

    const handleAccountChange = e => setacctnum(e.target.value)

    const [state, dispatch] = useReducer(modalReducer, initialState)
    const {open_new_beneficiary, 
            size_new_beneficiary,
            open_new_beneficiary_to,
            size_new_beneficiary_to,
            open_saved_account,
            size_saved_account} = state

    const new_beneficiary = () => {
        close()
        dispatch({type: 'open', size_new_beneficiary: 'mini'})
    }

    const new_saved_account = () => {
        close()
        dispatch({type: 'open_saved_account', size_saved_account: 'mini'})
    }

    const [saveAccount, setSaveAccount] = useState(false)

    const {data:users, isSuccess} = useGetusersQuery()
    let useraccount

    if(isSuccess){
        useraccount = users.map(usr => (
            {
                'id': usr.id, 
                'accountnumber': usr.accountnumber,
                'fname': usr.fname,
                'lname': usr.lname,
                'accountbal': usr.accountbal

            }
        ))
    }
    let acct = ''
    const searchAccount = () => {
        acct = acctnum
        if(acct.length === 10){
            setloading(true)
            //setdisabled(true)
            setTimeout(() => {
                const user = useraccount.find(u => u.accountnumber === acct)
                if(user){
                    setcontinue_btn(true)
                    setfname(user.fname)
                    setlname(user.lname)
                    setaccountno(user.accountnumber)
                    setacctId(user.id)
                    setaccountbal(user.accountbal)
                    //setacctnum('')
                    setloading(false)
                }else{
                    setcontinue_btn(false)
                    setloading(false)
                }
            }, 300)  
        }
       
    }

    const panel = [
        {
            key: '1',
            title: 'To Swift',
            content: [
                <>
                    <Header as="h4">
                        Beneficiary Account<br/>
                        <span style={{fontSize: '0.9em', fontWeight: 'normal'}}>How do we send the money?</span>
                    </Header> 
                    <List relaxed verticalAlign="middle" divided>
                        <List.Item style={{color: 'black'}} as="a" onClick={() => new_beneficiary()}>New Beneficiary</List.Item>
                        <List.Item style={{color: 'black'}} as="a" onClick={() => new_saved_account() }>Saved Beneficiary</List.Item>

                    </List>
                </>
               
            ]
        },
        {
            key: '3',
            title: 'To Other Banks',
            content: 'Beneficiary Account'
        }

    ]
    const [updateaccount, {isLoading}] = useSaveAccountMutation()
    let accountnumber = acctnum
    const saveacct = [fname, lname, accountnumber].every(Boolean) && !isLoading
    const populateaccount = () => {
        if(saveAccount){
            if(saveacct){
                updateaccount({fname, lname, accountnumber}).unwrap()
            }
        }
        dispatch_reducer(updateToAccount(
            acctnum,
            fname,
            lname,
            acctId,
            accountbal
        ))
        dispatch({type: 'close'})
    }
    const closeModal = () => {
        dispatch({type: 'close'})
    }
    return(
        <>
            <Modal
        open={open}
        size={size}
        >
        <Modal.Header>
            <Icon onClick={() => close()} name="long arrow alternate left"  />
            <span>Destination</span>
        </Modal.Header>
        <Modal.Content>
            <Modal.Description style={{paddingBottom: '5em'}}>
                <Header as="h3" content="Where do you want to sent the money?" />
                <Accordion panels={panel} styled />
            </Modal.Description>
        </Modal.Content>
        </Modal>
        <Modal
            open={open_new_beneficiary}
            size={size_new_beneficiary}
        >
            <Modal.Header>
                New Beneficiary
                <Icon onClick={() => dispatch({type: 'close'})} style={{float: 'right'}} name="close"  />
            </Modal.Header>
            <Modal.Content>
                <Header as="h3" textAlign="left">
                    Account Number<br/>
                    <span style={{fontSize: '1em', fontWeight: 'normal'}}>Beneficiary's account number</span>
                </Header>
                <Input
                    size="large"
                    placeholder="Account Number"
                    value={acctnum}
                    fluid
                    loading={loading}
                    onChange={handleAccountChange}
                />
                <br/>
                {continue_btn ?
                <>
                    <Segment>
                        <span>{fname}</span><span>{lname}</span> <br/>
                        {accountno} | Swift
                    </Segment>
                    <Checkbox 
                        label="Save Account Number"
                        value={saveAccount}
                        onChange={(e, {value}) => setSaveAccount(true)} 
                    />
                  
                    <Header textAlign="left" as="h3" content="Is this the person?" />
                    <Button 
                        size="large" 
                        circular 
                        style={{textAlign: 'left'}} color="black"
                        onClick={() => populateaccount()}
                    >
                        Yes Continue
                    </Button>
                    <Button 
                        size="large" 
                        circular style={{textAlign: 'left'}} 
                        color="youtube"
                        onClick={() => dispatch({type: 'close'})}
                    >
                        Cancel
                    </Button>
                </>     
                :                
                ''
                }
               
            </Modal.Content>
        </Modal>
        <Modal
            open={open_new_beneficiary_to}
            size={size_new_beneficiary_to}
        >
            <Modal.Header>
                Destination To
            </Modal.Header>
        </Modal>
        <SavedAccounts 
            open={open_saved_account} 
            size={size_saved_account}
            close={closeModal}
        
        />
        
        </>
        
    )
} 


