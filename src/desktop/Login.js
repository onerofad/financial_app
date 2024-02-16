import { Container, Grid, Segment, Form, Image, Header, Button } from "semantic-ui-react"
import './style.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useGetusersQuery } from "../features/api/apiSlice"

export const Login = ({mobile}) => {

    const navigate = useNavigate()

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [loading, setloading] = useState(false)

    const [usernameError, setusernameError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)

    const handleusernameChange = e => setusername(e.target.value)
    const handlepasswordChange = e => setpassword(e.target.value)

    const {data: users, isSuccess} = useGetusersQuery()
    let count = 0 
    let email = ''
    let accno = ''
    let acctype = ''
    if(isSuccess){
        users.map(user => {
            if(user.username === username && user.password === password){
                ++count
                email = user.email
                accno = user.accountnumber
                acctype = user.accountype
            }
        })
    }
    const onclicklogin = () => {
        if(username === ''){
            setusernameError({content: 'Empty Field'})
        }else if(password === ''){
            setpasswordError({content: 'Empty Field'})
        }else if(count === 0){
            setusernameError({content: 'Invalid username or password'})
        }else if(count > 0){
            setloading(true)
            setTimeout(() => {
                sessionStorage.setItem("userId", username)
                sessionStorage.setItem("emailId", email)
                sessionStorage.setItem("accId", accno)
                sessionStorage.setItem("acctype", acctype)
                navigate("/user-dashboard")
            }, 300)
        }
    }
    return(
        <>
        <Segment vertical style={{padding: '0em'}}>
            <Grid textAlign="center" stackable>
                <Grid.Row>
                    <Grid.Column  width={8} id = "login_bg"
                        style={{
                            width: '100%',
                            height: mobile ? '0px' : 'auto',
                            display: mobile ? 'none' : 'block',
                            backgroundSize: 'cover',
                            color: 'white'
                        }}  
                    >

                    </Grid.Column>
                    <Grid.Column width={8} style={{padding: mobile ? '3em 0em' : '10em 8em'}}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Image centered size="small" src="./images/logo.png" />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header as="h1" content="Internet Banking" />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Form>
                                        <Form.Field>
                                            <Form.Input
                                                placeholder="Username ID"
                                                value={username}
                                                onChange={handleusernameChange}
                                                error={usernameError}
                                                onClick={() => setusernameError(false)}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <Form.Input
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={handlepasswordChange}
                                                error={passwordError}
                                                onClick={() => setpasswordError(false)}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <Button 
                                                fluid 
                                                color="youtube"
                                                size="large"
                                                style={{fontWeight: 'bold'}}
                                                onClick={() => onclicklogin()}
                                                loading={loading}
                                            >
                                                PROCEED TO LOGIN
                                            </Button>
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'right'}}>
                                            <Link style={{color: 'red', fontSize: '1.1em'}}>Forgot Password?</Link>
                                        </Form.Field>
                                        <Form.Field>
                                            <Link to="/register" style={{color: '#000', fontSize: '1.1em'}}>New Customers</Link> 
                                        </Form.Field>
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        </>
    )
}