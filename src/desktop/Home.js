import { Button, Container, Grid, Header, Segment, Image, Icon, Statistic } from "semantic-ui-react"
import { Navbar } from "./Navbar"
import './style.css'
import { Footer } from "./Footer"
import { useNavigate } from "react-router-dom"

export const Home = ({mobile}) => {
    const navigate = useNavigate()
    return(
        <>
             <Navbar />
             <Segment id="grad" vertical style={{padding: '3em'}}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as="h1" style={{fontSize: '3em', letterSpacing: '0.2em'}} content="Welcome To" />
                                <Header  as="h1" style={{fontSize: '3em', letterSpacing: '0.2em', wordSpacing: '0.2em'}} content="Swiftcope Bank!!!"  />
                                <Header style={{fontSize: '1.5em', fontStyle: 'normal'}}>Fast and easy Swizz Banking</Header>
                                <Button 
                                    color="positive"
                                    size="huge"
                                    onClick={() => navigate("/login")}
                                >
                                    Login Your Account
                                </Button>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Image src="./images/header2.png"  centered size="medium" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
             </Segment>
             <Segment vertical style={{padding: '3em'}}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Segment raised>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column textAlign="center" width={3} verticalAlign="middle">
                                                <Icon size="big" name="money" color="green" />
                                            </Grid.Column>
                                            <Grid.Column width={12} verticalAlign="middle">
                                                <Header as="h4" content="$0.00 / mo" />
                                                Free account available
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Segment raised>
                                    <Grid>
                                            <Grid.Row>
                                                <Grid.Column textAlign="center" width={3} verticalAlign="middle">
                                                    <Icon size="big" name="add user" color="green" />
                                                </Grid.Column>
                                                <Grid.Column width={12} verticalAlign="middle">
                                                    <Header as="h4" content="10 minutes" />
                                                    Apply for account
                                                </Grid.Column>
                                            </Grid.Row>
                                    </Grid>

                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Segment raised>
                                <Grid>
                                    <Grid.Row>
                                            <Grid.Column textAlign="center" width={3} verticalAlign="middle">
                                                <Icon size="big" name="money" color="green" />
                                            </Grid.Column>
                                            <Grid.Column width={12} verticalAlign="middle">
                                                <Header as="h4" content="$10,000,000" />
                                                Guaranteed deposit
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>

                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Segment raised>
                                <Grid>
                                    <Grid.Row>
                                            <Grid.Column textAlign="center" width={3} verticalAlign="middle">
                                                <Icon size="big" name="phone" color="green" />
                                            </Grid.Column>
                                            <Grid.Column width={12} verticalAlign="middle">
                                                <Header as="h4" content="24/7 help line" />
                                                Always available
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>

                                </Segment>
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
                                <Header style={{fontSize: '3.1em'}} as="h2" content="Financial Wellness Check-up" />
                                <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                  Swiftcope Bank International is committed to helping you achieve your financial and life planning goals. It all starts with an honest assessment of what you already know, and more importantly what you need to learn. We pledge to expand your financial knowledge so you can confidently navigate life's challenges and opportunities.
                                </p>
                                <p style={{backgroundImage: 'linear-gradient(#fff, #f6f6f6, #fff)'}}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Button  icon="check mark" fluid labelPosition="left" content="Free plan available"  color="green" />

                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Button  icon="check mark" fluid labelPosition="left" content=" Full data privacy compliance"  color="green" />

                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Button  icon="check mark" fluid labelPosition="left" content=" 100% transparent costs"  color="green" />

                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Button  icon="check mark" fluid labelPosition="left" content="Commitment-free"  color="green" />

                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Button  icon="check mark" fluid labelPosition="left" content="Real-time spending overview"  color="green" />

                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Button  icon="check mark" fluid labelPosition="left" content="Debit MasterCard included"  color="green" />

                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </p>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Image centered src="./images/finwell.png" />
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
                                <Header style={{fontSize: '3.1em'}} as="h2" content="Medium or Large level businesses" />
                                <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                We are here to Acelerate your business and help you find the way out.
                                </p>
                                <p style={{backgroundImage: 'linear-gradient(#fff, #f6f6f6, #fff)'}}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                            <Button  icon="check mark" fluid labelPosition="left" content="Coporate Cards"  color="green" />

                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                            <Button  icon="check mark" fluid labelPosition="left" content="International Payment"  color="green" />

                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                            <Button  icon="check mark" fluid labelPosition="left" content="Automated Accounting"  color="green" />

                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                            <Button  icon="check mark" fluid labelPosition="left" content="Request Features"  color="green" />

                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                            <Button  icon="check mark" fluid labelPosition="left" content="Premium Support"  color="green" />

                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Button  icon="check mark" fluid labelPosition="left" content="Direct Debit"  color="green" />
                                                   
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </p>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Image centered src="./images/finwell.png" />
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
                            <Header style={{fontSize: '3.1em'}} as="h2" content="Easy payment to borrow free get a better filling at home" />
                            <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                            Discover our loans and mortgages tailored to provide capital for you to start your new business venture, own your dream home or upgrade your car.
                            </p>
                            <p>
                                <Button size="huge" color="green">
                                    Get Started
                                </Button>
                            </p>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <p id="grad1" >
                            <Image centered src="./images/invoice.png" />

                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Container>
             </Segment>
             <Segment vertical style={{padding: '3em'}}>
             <Container>
                    <Grid>
                    <Grid.Row style={{padding: '0em 20em'}}>
                        <Grid.Column id="customer" textAlign="center">
                            <Header style={{fontSize: '3.1em'}} as="h2" content="We always try to understand customers expectation" />
                            <p  style={{fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                Whether you want to consolidate credit card debt, cover medical expenses, or make needed home improvements, a Swiftcope Personal Loan can help you get it done fast: Check your rate with no impact to your credit score. No fee to apply or close. No collateral required. Quick online application & pre-qualification. ePay discount
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row textAlign="center">
                        <Grid.Column width={4}>
                        <Statistic size="small">
                            <Statistic.Value>180K</Statistic.Value>
                            <Statistic.Label>Downloaded</Statistic.Label>
                        </Statistic>
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Statistic size="small">
                            <Statistic.Value>20K</Statistic.Value>
                            <Statistic.Label>Feedback</Statistic.Label>
                        </Statistic>
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Statistic size="small">
                            <Statistic.Value>500K</Statistic.Value>
                            <Statistic.Label>Workers</Statistic.Label>
                        </Statistic>
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Statistic size="small">
                            <Statistic.Value>70K</Statistic.Value>
                            <Statistic.Label>Contributors</Statistic.Label>
                        </Statistic>
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
                                <Image size="large" src="./images/finwell.png" />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Segment>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={11}>
                                                <Header style={{fontSize: '1.5em'}} as="h2" content="Have any question about us?" />
                                                <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                                                    Do not hesitate to contact us
                                                </p>
                                            </Grid.Column>
                                            <Grid.Column width={5} verticalAlign="middle">
                                            <Button size="large" color="youtube">
                                                Contact us
                                            </Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            <Header style={{fontSize: '3.1em'}} as="h2" content="You can find all the thing you need to payout" />
                            <p style={{display: 'block', fontSize: '1.2em', wordSpacing: '0.2em', fontStyle: 'normal'}}>
                            Take advantage of our digital payment solutions designed to help organisations and businesses manage easy payments
                            </p>
                            <p>
                                <Button color="youtube">
                                    <Icon size="big" name="apple" />Download on Apple Store
                                </Button>
                                <Button color="green">
                                <Icon size="big" name="google play" />Download on Google play

                                </Button>
                            </p>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>

             </Segment>
             
             <Footer />
             
        </>
    )
}