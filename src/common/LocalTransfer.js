import { useState } from "react"
import { Container, Grid, Header, Segment, Form, Button, Portal } from "semantic-ui-react"

export const LocalTransfer = () => {
    const [open, setopen] = useState(false)

    const handleOpen = () => setopen(true)
    const handleClose = () => setopen(false)
    return(
      <Segment vertical style={{padding: '4em 2em', backgroundColor: '#f6f6f6'}}>
        <Container>
            <Grid textAlign="center">
                <Grid.Row>
                    <Grid.Column style={{maxWidth: 600}}>
                        <Segment raised style={{padding: '4em 2em', backgroundColor: '#f6f6f6'}}>
                           
                            <Form size="huge">
                                <Form.Field style={{textAlign: 'left'}}>
                                    <label>AMOUNT</label>
                                </Form.Field>
                                <Form.Field >
                                    <Form.Input
                                        transparent
                                        icon="dollar"
                                        onClick={handleOpen}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        placeholder="FROM"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        placeholder="TO"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Button 
                                        fluid size="huge" 
                                        color="black"
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
        <Portal onClose={handleClose} open={open}>
            <Segment
              style={{
                left: '31%',
                position: 'fixed',
                top: '30%',
                zIndex: 1000,
              }}
            >
            <Button
                content='Close Portal'
                negative
                onClick={handleClose}
              />
              <Button
                content='Close Portal'
                negative
                onClick={handleClose}
              />
              <Button
              content='Close Portal'
              negative
              onClick={handleClose}
              />
              <Button
                content='Close Portal'
                negative
                onClick={handleClose}
               />
            </Segment>
          </Portal>
      </Segment>
    )
}