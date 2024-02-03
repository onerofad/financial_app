import { useState } from "react"
import { Container, Grid, Header, Segment, Form, Icon, Input, Modal, Button, Checkbox, List, Table, Accordion } from "semantic-ui-react"
import { UserNavbar } from "./UserNavbar"
import { useReducer } from "react"
import { useGetusersQuery, useLocalTransferMutation } from "../features/api/apiSlice"
import { DestinationModal } from "./DestinationModal"
import { useSelector } from "react-redux"

const initialState = {
    open: false,
    size: undefined,
    open_destination: false,
    size_destination: undefined,
    open_success: false,
    size_success: undefined
}
function modalReducer(state, action){
    switch(action.type){
        case 'open':
            return {open: true, size: action.size}

        case 'open_destination':
            return {open_destination: true, size_destination: action.size_destination}
        
        case 'open_success':
            return {open_success: true, size_success: action.size_success}

        case 'close':
            return {open: false, open_destination: false, open_success: false}

        default:
            return new Error("Unexpected choice")
    }
}
export const LocalTransfer = () => {
 
    const [amount, setAmount] = useState('')
    const accountNo = useSelector((state) => state.accounts.accountNo)
    const [accountNoError, setaccountError] = useState(false)

    const [state, dispatch] = useReducer(modalReducer, initialState)
    const {open, size, open_destination, size_destination, open_success, size_success} = state
   
    const [loading, setloading] = useState(false)
    const [accountInformation, setaccountInformation] = useState('')
    const [accountInformationError, setaccountInformationError] = useState(false)

    const [remark, setremark] = useState('')
    const [remarkError, setremarkError] = useState(false)

    const handleremarkChange = e => setremark(e.target.value)
    const handleAmountChange = e => setAmount(e.target.value)
    
    const {data:users, isSuccess} = useGetusersQuery()
    let account = ''
    let accounttype =''
    let accountbal = ''
    let fname = ''
    let lname = ''
    if(isSuccess){
        const user = users.find(u => u.email === sessionStorage.getItem("emailId"))
        if(user){
            account = user.accountnumber
            accounttype = user.accountype
            accountbal  = user.accountbal
            fname = user.fname
            lname = user.lname
        }
    }
    const addAccount = () => {
        setaccountInformation(account + ' | ' + accounttype + ' | ' + accountbal)
        dispatch({type: 'close'})
    }
    const closeModal = () => {
        dispatch({type: 'close'})
    }  

    const [addtransaction, {isLoading}] = useLocalTransferMutation()
    const saveTransaction = [amount, account, accounttype, accountbal, fname, lname, accountNo, remark].every(Boolean) && !isLoading
   
    const sendMoney = async () => {
        if(accountInformation === ''){
            setaccountInformationError({content: 'Empty Field'})
        }else if(accountNo === ''){
            setaccountError({content: 'Empty Field'})
        }else{
            if(saveTransaction){
                setloading(true)
                try{
                    await addtransaction({amount, account, accounttype, accountbal, fname, lname, accountNo, remark}).unwrap()
                    setloading(false)
                    setAmount('')
                    account = ''
                    accounttype = ''
                    accountbal = ''
                    fname = ''
                    lname = ''
                    setaccountInformation('')
                    setremark('')
                    dispatch({type: 'open_success', size_success: 'mini'})
                }catch(error){
                    console.log("An Error has occured", error)
                }
            }
           

        }
    }

    return(
        <>
            <UserNavbar />
             <Segment vertical style = {{padding: '3em 0em', backgroundColor: '#F6F6F6'}}>
                <Container>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column style={{textAlign: 'center', maxWidth: 600, textAlign: 'left'}}>
                            <Segment inverted tertiary raised secondary color="green" style = {{padding: '2em 2em'}}>
                            <Header textAlign="center" icon as="h2" >
                                <Icon circular inverted color="green" name="money bill alternate outline" />
                                Local Transfer
                            </Header>

                            <Form size="huge">
                                    <Form.Field>
                                        <label>Amount:</label>
                                        <Input onChange={handleAmountChange} value={amount} list="amounts" />
                                        <datalist id="amounts">
                                            <option value="500">500</option>
                                            <option value="1000">1,000</option>
                                            <option value="5000">5,000</option>
                                            <option value="10000">10,000</option>
                                            <option value="20000">20,000</option>
                                            <option value="50000">50,000</option>
                                            <option value="100000">100,000</option>
                                            <option value="500000">500,000</option>
                                            <option value="1000000">1,000,000</option>

                                        </datalist>
                                        
                                    </Form.Field>
                                    <Form.Field>
                                        <label>From:</label>
                                        <Input
                                            onClick = {() => dispatch({type: 'open', size: 'mini'})}
                                            value= {accountInformation}
                                            error={accountInformationError}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>To:</label>
                                        <Input 
                                             onClick = {() => dispatch({type: 'open_destination', size_destination: 'mini'})}
                                            value = {accountNo}
                                            error={accountNoError}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Remark (100 characters only)</label>
                                        <Form.TextArea 
                                            value={remark}
                                            error={remarkError} 
                                            onChange={handleremarkChange}
                                            onClick={() => setremarkError(false)}
                                        />
                                    </Form.Field>
                                    <Form.Field style={{textAlign: 'center'}}>
                                        <Button
                                         color="green"
                                         size="massive"
                                         circular
                                         loading={loading}
                                         onClick={() => sendMoney()}
                                        >
                                            Send Money
                                        </Button>
                                    </Form.Field>

                            </Form>
                            </Segment>
                            
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <Modal
                open={open_success}
                size={size_success}
               >
                    <Modal.Header>Success</Modal.Header>
                    <Modal.Content>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column>
                                    
                                        <Segment fluid raised inverted secondary tertiary color="green">
                                            <Header as="h3" icon>
                                                <Icon circular inverted color="green" name="sign in" />
                                                Transfer Successfull
                                            </Header>
                                        </Segment>
                                   
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Button 
                                        fluid circular size="large" 
                                        color="youtube"
                                        onClick={() => dispatch({type: 'close'}) }
                                    >
                                        Close
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Modal.Content>
               </Modal>
                <Modal 
                    open={open}
                    size={size}
                >
                    <Modal.Header>
                         Source Account
                        <Icon onClick={() => dispatch({type: 'close'})} style={{float: 'right'}} name="close" />
                    </Modal.Header>
                    <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={12}>
                                <p style={{fontSize: '1.2em'}}>
                                    {account} | {accounttype} <br/>
                                    ${accountbal} <br/>
                                    {fname + ' '} {lname}
                                </p>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Button 
                                    color="green"
                                    onClick={() => addAccount()}
                                >
                                    Add
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>    
                            
                    </Modal.Content>
                </Modal>
               <DestinationModal
                    open={open_destination}
                    size={size_destination}
                    close={() =>closeModal()}
               />
               
            </Segment>
        </>
     
    )
}