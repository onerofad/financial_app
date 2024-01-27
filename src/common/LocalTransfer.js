import { useState } from "react"
import { Container, Grid, Header, Segment, Form, Icon, Input, Modal, Button, Checkbox } from "semantic-ui-react"
import { UserNavbar } from "./UserNavbar"
import { useReducer } from "react"
import { useGetusersQuery } from "../features/api/apiSlice"

const initialState = {
    open: false,
    size: undefined,
}
function modalReducer(state, action){
    switch(action.type){
        case 'open':
            return {open: true, size: action.size}
        case 'close':
            return {open: false}
        default:
            return new Error("Unexpected choice")
    }
}
export const LocalTransfer = () => {
 

    const [state, dispatch] = useReducer(modalReducer, initialState)
    const {open, size} = state

    const [accountInfo, setaccountInfo] = useState('')

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
        setaccountInfo(account)
        dispatch({type: 'close'})
    }

    return(
        <>
            <UserNavbar />
             <Segment vertical style = {{padding: '3em 0em', backgroundColor: '#F6F6F6'}}>
                <Container>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column style={{textAlign: 'center', maxWidth: 600, textAlign: 'left'}}>
                            <Segment inverted tertiary raised secondary color="green" style = {{padding: '2em 4em'}}>
                            <Header textAlign="center" icon as="h2" >
                                <Icon circular inverted color="green" name="money bill alternate outline" />
                                Local Transfer
                            </Header>

                            <Form size="huge">
                                    <Form.Field>
                                        <label>Amount:</label>
                                        <Input list="amounts" />
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
                                            value={accountInfo}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>To:</label>
                                        <Form.Input />
                                    </Form.Field>
                                    <Form.Field style={{textAlign: 'center'}}>
                                        <Button
                                         color="green"
                                         size="massive"
                                         circular
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
            </Segment>
        </>
     
    )
}