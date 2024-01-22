import { Container, Grid, Header, Segment, Icon, Form, Button } from "semantic-ui-react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { GetAccount } from "./GetAccount"

export const Contact = () => {

    return(
        <>
        <Navbar />
        <Segment id="about" vertical style={{padding: '10em 0em'}}>
            <Container>
                <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column verticalAlign="middle">
                            <Header inverted color="white" as="h1" content="Contact Us" />
                            <p style={{display: 'block', fontSize: '1.3em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                            If you have an idea, we would love to hear about it.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
        <Segment vertical style={{padding: '3em'}}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column textAlign="center">
                                <Header style={{fontSize: '3.1em'}} as="h2" content="Drop us message for any query" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{padding: '4em'}}> 
                        <Grid.Column width={1} style={{minHeight: 400}}>
                            <Icon style={{marginTop: '10em'}} name="map marker" size="large" inverted circular color="green" />
                            <Icon style={{marginTop: '7em'}} name="mail" size="large" inverted circular color="green" />

                        </Grid.Column>
                        <Grid.Column width={5} style={{maxHeight: 400}}>
                        <Header as="h2" content="Addresses" />         
                                <p style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                    Headquaters: 794 Mcallister St San Francisco, California(CA), 94102
                                </p>
                                <p style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                    Branches: 33 Hurontario, Mississauga, ON L5G 3G8
                                </p>
                                <p style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                    19 Railway Street, Vale View, Queensland Australia
                                </p>
                                <p style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                Harzighöllstrasse 8, 8411 Zurich Switzerland
                                </p>
                                <p style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                    Berlin Lübars, Berlin(BE), 13355 Germany
                                </p>
                                <p style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                    53591,Dubai,Emirates
                                </p>
                                <p style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                    Grubbstugan 14, Lit 836 91 Jämtland, Sweden
                                </p>
                                <p style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                   Email: support@swiftcope.com
                                </p>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Segment style={{padding: '3em'}} secondary vertical raised>
                            <Form size="large">
                                <Form.Group widths={2}>
                                    <Form.Field>
                                        <Form.Input
                                            placeholder="Name"
                                            focus
                                            
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            placeholder="Email"
                                            focus
                                        />
                                    </Form.Field>
                                </Form.Group>
                                <Form.Group widths={2}>
                                    <Form.Field>
                                        <Form.Input
                                            placeholder="Phone"
                                            focus
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input
                                            placeholder="Subject"
                                            focus
                                        />
                                    </Form.Field>
                                </Form.Group>
                                <Form.Field>
                                    <Form.TextArea
                                        placeholder="Your Message"
                                        focus
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Checkbox
                                        label="
                                        By checking this, you agree to our Terms and Privacy policy."
                                        fitted
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Button color="youtube">
                                        SEND MESSAGE
                                    </Button>
                                </Form.Field>
                            </Form>
                            </Segment>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
        <GetAccount />
        <Footer />
        </>
    )
}