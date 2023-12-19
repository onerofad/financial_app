import { Container, Grid, Header, Segment, Image } from "semantic-ui-react"
import { FooterMobile } from "./FooterMobile"
import { NavbarMobile } from "./NavbarMobile"

export const BusinessMobile = () => {

    return(
        <>
        <NavbarMobile />
        <Segment id="business_mobile" vertical style={{padding: '10em 0em'}}>
                <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column verticalAlign="middle">
                            <Header inverted color="white" as="h1" content="Small Business" />
                            <p style={{display: 'block', fontSize: '2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
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
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                            <Header inverted color="blue" style={{fontSize: '1.5em'}} as="h2" content="STARTING YOUR BUSINESS" />
                                            <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                            Before starting your business, it’s imperative that you create a business plan and a financial plan. Establishing the right financial practices at the outset will form a strong foundation and help you avoid unnecessary expense and hassle down the road
                                            </p>
                                            <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontWeight: 'bold', fontStyle: 'normal'}}>
                                            Controlling Cash Flow
                                            </p>
                                            <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                                Avoid surprises by staying on top of your business cash flow. Good practices here can lead to positive discussions when you’re working to grow your business in the future.
                                            </p>
                               
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                            <Header inverted color="blue" style={{fontSize: '1.5em'}} as="h2" content="INCREASING PROFITABILITY" />
                                            <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                                Even the most experienced business owners should always take the time to evaluate how the business is going. It is likely you’ll find something you can
                                            </p>
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