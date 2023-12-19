import { Button, Grid, Modal } from "semantic-ui-react"

export const SendMoneyModal = ({open, size, close}) => {

    return(
        <Modal
            open={open}
            size={size}
        >
            <Modal.Header>Money Transfer</Modal.Header>
            <Modal.Content>
                <Grid>
                    <Grid.Row>
                        <Grid.Column textAlign="center">
                            <Button 
                                size="large"
                                color="youtube"
                                onClick={() => close()}
                            >
                                Close
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Modal.Content>
        </Modal>
    )
}