
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Header, Icon, Menu, Segment, Sidebar } from "semantic-ui-react"

export const NavbarMobile  = ()  => {
    const [sidebarOpened, setSidebarOpened]  = useState()
    const navigate  = useNavigate()
    return(
        <>
            <Sidebar
                visible ={sidebarOpened}
                as={Menu}
                animation="overlay"
                inverted
                vertical
                style ={{
                    maxHeight: 400
                }}
                color="green"
                onHide={()  => setSidebarOpened(false)}

            >
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
            </Sidebar>  
            <Sidebar.Pusher>
                <Segment vertical inverted color="green">
                    <Menu
                        secondary
                        size='large'
                        fixed='top'
                        color='green'
                        inverted
                        style={{minHeight: 60}}
                    >
                        <Container>
                            <Menu.Item header>
                                SWIFTCOPE BANK
                            </Menu.Item>
                            <Menu.Item style ={{color: '#fff'}} position="right" onClick={()  => setSidebarOpened(true)}>
                                <Icon size="big" name="sidebar" />
                            </Menu.Item>
                        </Container>
                    </Menu>

                </Segment>
            </Sidebar.Pusher>   
        </>
    )
}