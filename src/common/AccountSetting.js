import { Divider, Grid, Icon, List, Modal, Table } from "semantic-ui-react"
import { useGetusersQuery } from "../features/api/apiSlice"


export const AccountSetting = ({open, size, close}) => {

    const {data: users, isSuccess} = useGetusersQuery()
    let fullname, email, address, phone, stateorigin, zipcode
    if(isSuccess){
        const user = users.find(u => u.username === sessionStorage.getItem("userId"))
        if(user){
            fullname = user.fname + ' ' + user.lname
            email = user.email
            address = user.address
            phone = user.phone
            stateorigin = user.stateorigin
            zipcode = user.zipcode
        }
    }
    return(
        <>
            <Modal
                open={open}
                size={size}
            >
                <Modal.Header>
                    Account Settings
                    <Icon onClick={() => close()} style={{float: 'right'}} name="close" />
                </Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <List animated relaxed size="huge" verticalAlign="middle">
                                    <List.Item>
                                            <Icon inverted color="green" name="user" />
                                        <List.Content>
                                            {fullname}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                            <Icon inverted color="green" name="mail" />
                                        <List.Content>
                                            {email}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                            <Icon inverted color="green" name="address card" />
                                        <List.Content>
                                            {address}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                            <Icon inverted color="green" name="phone" />
                                        <List.Content>
                                            {phone}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                            <Icon inverted color="green" name="map marker" />
                                        <List.Content>
                                            {stateorigin}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                            <Icon inverted color="green" name="zip" />
                                        <List.Content>
                                            {zipcode}
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                   
                </Modal.Content>
            </Modal>
        
        </>
    )

}