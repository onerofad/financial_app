import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Grid, Icon, Loader, Modal, Tab } from "semantic-ui-react"

export const SendMoneyModal = ({open, size, close}) => {

    const navigate = useNavigate()
    const [local, setlocal] = useState(false)
    const clickLocal = () => {
        setlocal(true)
        setTimeout(() => {
            navigate("/local")
        }, 3000)
    }
    return(
        <Modal
            open={open}
            size={size}
        >
            <Modal.Header>
                Send Money
                <Icon style={{float: 'right'}} name="close"  onClick={() => close()} />

            </Modal.Header>
            <Modal.Content>
                <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column width={8}>
                           
                            <Button 
                                icon="money bill" 
                                 positive
                                label="Local Transfer"
                                onClick={() => clickLocal()}
                                loading={local}
                            />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Button 
                                icon="money bill" 
                                 negative
                                label="Foreign Transfer"

                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Modal.Content>
        </Modal>
    )
}