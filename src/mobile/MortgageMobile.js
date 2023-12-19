import { Container, Grid, Header, Segment, Image, Icon } from "semantic-ui-react"
import { FooterMobile } from "./FooterMobile"
import { NavbarMobile } from "./NavbarMobile"

export const MortgageMobile = () => {

    return(
        <>
        <NavbarMobile />
        <Segment id="mortgage_mobile" vertical style={{padding: '10em 0em'}}>
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
        </Segment>
        <Segment vertical style={{padding: '3em 1em'}}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                           <Grid> 
                                <Grid.Row>
                                    <Grid.Column textAlign="center">
                                        <Header style={{fontSize: '1.5em'}} as="h2" content="REST EASY. YOU'VE GOT SOMEONE ON YOUR SIDE." />
                                        <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                        At Swiftcope, we take home mortgages personally. That’s why you’ll find a knowledgeable person readily available to answer your questions and ease your concerns as you go through the home loan process. We want to make absolutely sure you get the mortgage that’s right for you, so we talk to you about it – face-to-face at a branch and over the phone. Our process is all about you, and helping you feel good about the loan you’re getting. Who knew conversation could make things so much easier?
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>                          
                                <Grid.Row>
                                <Grid.Column>
                                    <Icon size="small" inverted color="green" circular name="checkmark" />
                                    Full data privacy compliance
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                <Grid.Column>
                                    <Icon size="small" inverted color="green" circular name="checkmark" />
                                    100% transparent costs
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Icon size="small" inverted color="green" circular name="checkmark" />
                                    Commitment-free
                                </Grid.Column>
                            </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                   
                </Grid>
        </Segment>
        <FooterMobile />
        </>
    )
}