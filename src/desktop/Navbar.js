import { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Segment, Container, Header, Menu } from "semantic-ui-react"

export const Navbar = () => {

    const navigate = useNavigate()
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
                    <Menu.Item onClick={() => navigate("/")} as="a" position='right'>
                        Home
                    </Menu.Item>
                    <Menu.Item onClick={() => navigate("/about")} as="a"  >
                        About
                    </Menu.Item>
                    <Menu.Item onClick={() => navigate("/business")} as="a" >
                        Business
                    </Menu.Item>
                    <Menu.Item onClick={() => navigate("/investment")} as="a" >
                        Investments
                    </Menu.Item>
                    <Menu.Item onClick={() => navigate("/mortgage")} as="a">
                        Mortgages
                    </Menu.Item>
                    <Menu.Item onClick={() => navigate("/contact")} as="a">
                        Contact
                    </Menu.Item>

                </Container>
            </Menu>

        </Segment>   
    )
}