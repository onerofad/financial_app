import { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Segment, Container, Header, Menu, Icon, Dropdown } from "semantic-ui-react"

export const UserNavbar = () => {

    const navigate = useNavigate()

    const logout = () => {
        sessionStorage.removeItem("userId")
        navigate("/login")
    }
    return(
        <Segment vertical style={{minHeight: 60}}>
            <Menu
                
                secondary
                size='massive'
                fixed='top'
                color='green'
                inverted
                style={{minHeight: 60}}
                
            >
                <Container>
                    <Menu.Item header>
                        SWIFTCOPE BANK
                    </Menu.Item>
                    <Menu.Item onClick={() => navigate("/")} position='right'>
                        <Dropdown inline text= {sessionStorage.getItem("userId")}>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => logout() } icon="sign-out" text="Log out" />
                            </Dropdown.Menu>
                        </Dropdown>
                     
                    </Menu.Item>
                </Container>
            </Menu>

        </Segment>   
    )
}