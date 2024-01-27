import { useState } from "react"
import { Container, Grid, Header, Segment, Form, Icon, Input, Modal, Button } from "semantic-ui-react"
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

   /* const {data:users, isSuccess} = useGetusersQuery()
    let account = ''
    if(isSuccess){
        const user = users.find(u => u.username === sessionStorage.getItem("userId"))
        if(user){
            account = user.accountnumber
        }
    }*/

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
                        <Modal.Header>
                            0000000000 | Current Account
                        </Modal.Header>
                        <Modal.Description>
                            $0.00
                        </Modal.Description>
                        <Modal.Description>
                            John Emeka Nduka
                        </Modal.Description>
                                    
                            
                    </Modal.Content>
                </Modal>
            </Segment>
        </>
     
    )
}