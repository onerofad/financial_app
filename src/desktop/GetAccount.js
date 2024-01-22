import { Segment, Container, Grid, Header, Button } from "semantic-ui-react"
export const GetAccount = () => {

    return(
        <>
        <Segment inverted color="red" vertical style={{padding: '6em'}}>
<Container>
    <Grid stackable>
        <Grid.Row>
            <Grid.Column width={10} verticalAlign="middle">
                <Header inverted color="white" style={{fontSize : '3.1em'}} as="h2" content="Apply for an Account in Minutes" />
                <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                Get your Swiss account today!
                </p>
            </Grid.Column>
            <Grid.Column width={6} verticalAlign="middle">
                <Button floated="right" color="green" size="large">
                    GET YOUR SWISS ACCOUNT
                </Button>
            </Grid.Column>
        </Grid.Row>
    </Grid>
</Container>
</Segment>
        </>
    )

    }