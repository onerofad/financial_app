import { Button, Container, Grid, Segment, Image, Header, Icon, Divider } from "semantic-ui-react"

export const Footer = () => {
    return(
        <>
       
            <Segment inverted vertical style={{padding: '3em'}}>
                <Container>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Image centered size="medium" src="./images/logo.png" />
                                <Header inverted color="white" style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                    Swiftcope Bank International
                                     is a multi-state, bank 
                                     holding company 
                                     headquartered in 
                                     Switzerland.
                                </Header>
                                <p>
                                    <Icon size="large"  color="white" circular name="twitter square" />
                                    <Icon size="large"  color="white" circular name="facebook" />
                                    <Icon size="large"  color="white" circular name="instagram" />
                                    <Icon size="large"  color="white" circular name="linkedin" />

                                </p>
                            </Grid.Column>
                            <Grid.Column width={8}>

                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header as="h2" inverted color="white" content="Address" />
                                
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
                                    <Icon inverted color="red" name="mail" />Email: support@swiftcope.com
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                        <Grid.Row>
                            <Grid.Column style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.2em', fontStyle: 'normal'}} textAlign="center">
                                Copyright @2024. All rights reserved
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}