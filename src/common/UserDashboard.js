import { Container, Divider, Grid, Header, Icon, List, Segment, Table } from "semantic-ui-react"
import { UserNavbar } from "./UserNavbar"
import { useReducer, useState } from "react"
import '../desktop/style.css'
import { useGetusersQuery } from "../features/api/apiSlice"
import { SendMoneyModal } from "./SendMoneyModal"
import { Footer } from "../desktop/Footer"
import { AccountSetting } from "./AccountSetting"

const initialState ={
    open: false,
    size: undefined,
    open_account_setting: false,
    size_account_setting: undefined,
    loading: false
}

function modalReducer(state, action){
    switch(action.type){
        case 'open':
            return {open: true, size: action.size}
        case 'account_setting':
            return {open_account_setting: true, size_account_setting: action.size_account_setting}
        case 'close':
                return {open: false, open_account_setting: false}
        default:
            return new Error("action not available")
    }
}
export const UserDashboard = () => {

    const [state, dispatch] = useReducer(modalReducer, initialState)
    const {open, size, 
            open_account_setting, size_account_setting, 
            loading} = state

    const closeModal = () => {
        dispatch({type: 'close'})
    }
    const {data: users, isSuccess} = useGetusersQuery()
    let accountbal = 0
    let accountnumber, accountype, accountname
    if(isSuccess){
        const user = users.find(u => u.username === sessionStorage.getItem("userId"))
        if(user){
            accountnumber = user.accountnumber
            accountype = user.accountype
            accountname = user.fname + " " + user.lname
            accountbal = user.accountbal
        }
        
    }

    const account_setting = () => {


    }
    return(
        <>
        <UserNavbar />
        <Segment vertical style={{padding: '3em 0em', backgroundColor: '#f6f6f6'}}>
        <Container>
            <Grid divided stackable>
                <Grid.Row>
                    <Grid.Column width={8}>
                    <Segment raised size="big">
                        <Grid>
                            <Grid.Row>
                                <Grid.Column textAlign="center">
                                    <Header dividing content="ACCOUNT BALANCE" />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header inverted color="green" content="CURRENT BALANCE" />
                                    <Header textAlign="center" size="huge" icon="money bill" color="green" content={accountbal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>              
                    </Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <Segment raised size="big">
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column textAlign="center">
                                <Header dividing content="ACCOUNT OVERVIEW" />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                              <Table unstackable inverted color="green" textAlign="center">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>
                                            Account Name
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            Account Type
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            Account Number
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>{accountname}</Table.Cell>
                                        <Table.Cell>{accountype}</Table.Cell>
                                        <Table.Cell>{accountnumber}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>

                              </Table>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                    </Grid.Column>
                </Grid.Row>
                <Divider />
               <Grid.Row>
                    <Grid.Column>
                        <Header size="large" content="Features" />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                      
                            <Grid stackable>
                                <Grid.Row>
                                    <Grid.Column computer={4} mobile={8} textAlign="center">
                                        <Segment onClick={() => dispatch({type: 'account_setting', size_account_setting: 'mini'})} tertiary raised inverted color="green" secondary >
                                            <Header as="h3" icon>
                                                <Icon circular inverted color="green" name="settings" />
                                                Account Settings
                                            </Header>
                                        </Segment>
                                       
                                    </Grid.Column>
                                    <Grid.Column computer={4} mobile={8} textAlign="center">
                                        <Segment tertiary raised inverted color="green" secondary>
                                            <Header as="h3" icon>
                                                <Icon onClick={() => dispatch({type: 'open', size: 'mini'})} circular inverted color="green" name="money bill" />
                                                Send money
                                            </Header>
                                        </Segment>
                                        
                                    </Grid.Column>
                                    <Grid.Column mobile={8} computer={4} textAlign="center">
                                        <Segment tertiary raised inverted color="green" secondary>
                                            <Header as="h3" icon>
                                                <Icon circular inverted color="green" name="credit card" />
                                                Card
                                            </Header>
                                        </Segment>
                                        
                                    </Grid.Column>
                                    <Grid.Column mobile={8} computer={4} textAlign="center">
                                        <Segment tertiary raised inverted color="green" secondary>
                                            <Header as="h3" icon>
                                                <Icon circular inverted color="green" name="question" />
                                                Faq
                                            </Header>
                                        </Segment>
                                        
                                    </Grid.Column>
                                   
                                   
                                </Grid.Row>
                             
                            </Grid>
                           
                        
                    </Grid.Column>
                </Grid.Row> 
                
            </Grid>
               
        </Container>
        <SendMoneyModal open={open} size={size} close={closeModal} />
        <AccountSetting open={open_account_setting} size={size_account_setting} close={closeModal} />
        </Segment>
        <Footer />
        </>
    )
}