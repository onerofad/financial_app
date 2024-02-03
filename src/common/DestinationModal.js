import { useEffect, useReducer, useState } from "react"
import { Modal, Form, Header, Accordion, Icon, List, Input, Button, Segment, TextArea, Checkbox } from "semantic-ui-react"
import { useGetusersQuery } from "../features/api/apiSlice"
import { useDispatch } from "react-redux"
import { updateToAccount } from "../features/api/accountSlice"

const initialState = {
    open_new_beneficiary: false,
    size_new_beneficiary: undefined,

}

function modalReducer(state, action){
    switch(action.type){
        case 'open':
            return {open_new_beneficiary: true, size_new_beneficiary: action.size_new_beneficiary}
        case 'close':
            return {open_new_beneficiary: false}
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

    const dispatch_reducer = useDispatch()

    const handleAccountChange = e => setacctnum(e.target.value)

    const [state, dispatch] = useReducer(modalReducer, initialState)
    const {open_new_beneficiary, 
            size_new_beneficiary,
            open_new_beneficiary_to,
            size_new_beneficiary_to} = state

    const new_beneficiary = () => {
        close()
        dispatch({type: 'open', size_new_beneficiary: 'mini'})
    }
    const {data:users, isSuccess} = useGetusersQuery()
    let useraccount

    if(isSuccess){
        useraccount = users.map(usr => (
            {
                'key': usr.id, 
                'accountnumber': usr.accountnumber,
                'fname': usr.fname,
                'lname': usr.lname

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
                        <List.Item style={{color: 'black'}} as="a" onClick={() => alert("Saved Beneficiary") }>Saved Beneficiary</List.Item>

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
    const populateaccount = () => {
        dispatch_reducer(updateToAccount(
            acctnum
        ))
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
        
        </>
        
    )
} 



