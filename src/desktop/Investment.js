import { Container, Grid, Header, Segment, Image, Icon } from "semantic-ui-react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { GetAccount } from "./GetAccount"

export const Investment = () => {

    return(
        <>
        <Navbar />
        <Segment id="investment" vertical style={{padding: '10em 0em'}}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column verticalAlign="middle">
                            <Header as="h1" content="Investment" />
                            <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                            All the Tools you need
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
                        <Grid.Column width={8}>
                        <Grid>
                          <Grid.Row>
                            <Grid.Column>
                            <span style={{color: 'red'}}>FAST & EASY INVESTMENT PLAN</span> 
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row>
                            <Grid.Column>
                                <Header style={{fontSize: '3.1em'}} as="h2" content="READY, SET, INVEST." />
                                <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                    In the simplest terms, Swiftcope Bank Plc International is a multi-state, bank holding company headquartered in Switzerland. But that really doesn’t say much about who we are. Over the past decade, we have built a national reputation as a safe, sound and profitable bank holding company that always strives to do better by its customers.
                                </p>
                                <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                  We’ve always maintained our community bank orientation – because we’ve never forgotten whose money we’re holding. We merge technology with people to support our commitment to personal customer service. That’s why Swiftcope Bank International is, by all accounts, the smarter, faster and better bank for you.                                </p>
                            </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Icon size="small" inverted color="green" circular name="checkmark" />
                                    Free plan available
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Icon size="small" inverted color="green" circular name="checkmark" />
                                     Full data privacy compliance
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Icon size="small" inverted color="green" circular name="checkmark" />
                                    Debit Mastercard included
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Icon size="small" inverted color="green" circular name="checkmark" />
                                    100% transparent costs

                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Icon size="small" inverted color="green" circular name="checkmark" />
                                    Commitment-free

                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Icon size="small" inverted color="green" circular name="checkmark" />
                                    Real-time spending overview

                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        </Grid.Column>
                        <Grid.Column width={8}>
                                <Image centered size="large" src="./images/finwell.png" />
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