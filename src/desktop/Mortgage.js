import { Container, Grid, Header, Segment, Image, Icon } from "semantic-ui-react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const Mortgage = () => {

    return(
        <>
        <Navbar />
        <Segment id="mortgage" vertical style={{padding: '10em 0em'}}>
            <Container>
                <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column verticalAlign="middle">
                            <Header inverted color="white" as="h1" content="Mortgages" />
                            <p style={{display: 'block', fontSize: '1.3em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                            All the tools you need
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
                                        <Header style={{fontSize: '3.1em'}} as="h2" content="REST EASY. YOU'VE GOT SOMEONE ON YOUR SIDE." />
                                        <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                        At Swiftcope, we take home mortgages personally. That’s why you’ll find a knowledgeable person readily available to answer your questions and ease your concerns as you go through the home loan process. We want to make absolutely sure you get the mortgage that’s right for you, so we talk to you about it – face-to-face at a branch and over the phone. Our process is all about you, and helping you feel good about the loan you’re getting. Who knew conversation could make things so much easier?
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>                          
                                <Grid.Row>
                                <Grid.Column width={8}>
                                    <Icon size="small" inverted color="green" circular name="checkmark" />
                                    Full data privacy compliance
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
        <Footer />
        </>
    )
}