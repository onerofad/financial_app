import { Segment } from "semantic-ui-react"
import { NavbarMobile } from "./NavbarMobile"
import { FooterMobile } from "./FooterMobile"
import { Grid, Image, Header } from "semantic-ui-react"

export const AboutMobile = () => {

    return(
        <>
            <NavbarMobile />
            <Segment id="about_mobile" vertical style={{padding: '10em 0em'}}>
                <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column verticalAlign="middle">
                            <Header inverted color="white" as="h1" content="About Us" />
                            <p style={{display: 'block', fontSize: '1.3em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                            The Tryo story
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        </Segment>
        <Segment vertical style={{padding: '3em 1em'}}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                         <span style={{color: 'red'}}>HOW WE WERE FOUNDED</span> 
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                                <Header style={{fontSize: '1.5em'}} as="h2" content="Easy, fee-free banking for entrepreneurs" />
                                <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                    In the simplest terms, Swiftcope Bank Plc International is a multi-state, bank holding company headquartered in Switzerland. But that really doesn’t say much about who we are. Over the past decade, we have built a national reputation as a safe, sound and profitable bank holding company that always strives to do better by its customers.
                                </p>
                                <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                  We’ve always maintained our community bank orientation – because we’ve never forgotten whose money we’re holding. We merge technology with people to support our commitment to personal customer service. That’s why Swiftcope Bank International is, by all accounts, the smarter, faster and better bank for you.                                </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        </Segment>
        <FooterMobile />
        </>
    )
}