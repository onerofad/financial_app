import { Grid, Header, Segment, Image, Button, Icon, Statistic } from "semantic-ui-react"
import { NavbarMobile } from "./NavbarMobile"
import { FooterMobile } from "./FooterMobile"
import { useNavigate } from "react-router-dom"

export const HomeMobile = () => {
    const navigate = useNavigate()
    return(
        <>
             <NavbarMobile />
            <Segment id="grad_mobile" style={{padding: '4em 1em'}} vertical>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as="h1" style={{fontSize: '1.3em', letterSpacing: '0.2em'}} content="Welcome To" />
                                <Header  as="h1" style={{fontSize: '1.3em', letterSpacing: '0.2em', wordSpacing: '0.2em'}} content="Swiftcope Bank!!!"  />
                                <Header style={{fontSize: '1em', fontStyle: 'normal'}}>Fast and easy Banking</Header>
                                <Button 
                                    color="positive"
                                    size="medium"
                                    onClick={() => navigate("/login")}
                                >
                                    Login Account
                                </Button>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Image src="./images/header2.png"  centered size="medium" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Segment>
            <Segment vertical style={{padding: '3em 1em'}}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column mobile={8}>
                                <Segment>
                                    <Grid textAlign="center">
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Icon size="big" name="money" color="green" />
                                                <p>
                                                    <span style={{fontSize: '1.5em'}}>$0.00 / mo</span><br/>
                                                    Free account available
                                                </p>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    
                                </Segment>
                            </Grid.Column>
                            <Grid.Column mobile={8}>
                                <Segment>
                                    <Grid textAlign="center">
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Icon size="big" name="add user" color="green" />
                                                <p>
                                                    <span style={{fontSize: '1.5em'}}>10 minutes</span><br/>
                                                    Apply for account
                                                </p>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    
                                </Segment>
                            </Grid.Column>
                           
                        </Grid.Row>
                        
                        <Grid.Row>
                            <Grid.Column mobile={8}>
                                <Segment>
                                    <Grid textAlign="center">
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Icon size="big" name="money" color="green" />
                                                <p>
                                                    <span style={{fontSize: '1.5em'}}>$10,000,000</span><br/>
                                                    Guaranteed deposit
                                                </p>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    
                                </Segment>
                            </Grid.Column>
                            <Grid.Column mobile={8}>
                                <Segment>
                                    <Grid textAlign="center">
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Icon size="big" name="phone" color="green" />
                                                <p>
                                                    <span style={{fontSize: '1.5em'}}>24/7 help</span><br/>
                                                    Always available
                                                </p>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    
                                </Segment>
                            </Grid.Column>                     
                        </Grid.Row>                     
                    </Grid>
             </Segment>
             <Segment vertical style={{padding: '3em 1em'}}>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column>
                                <Header style={{fontSize: '1.5em'}} as="h2" content="Financial Wellness Check-up" />
                                <p style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.1em', fontStyle: 'normal'}}>
                                  Swiftcope Bank International is committed to helping you achieve your financial and life planning goals. It all starts with an honest assessment of what you already know, and more importantly what you need to learn. We pledge to expand your financial knowledge so you can confidently navigate life's challenges and opportunities.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            <p style={{backgroundImage: 'linear-gradient(#fff, #f6f6f6, #fff)'}}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Button  icon="check mark" fluid labelPosition="left" content="Free plans"  color="green" />

                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Button  icon="check mark" fluid labelPosition="left" content=" Data privacy"  color="green" />

                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Button  icon="check mark" fluid labelPosition="left" content=" 100% costs"  color="green" />

                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Button  icon="check mark" fluid labelPosition="left" content="Commitments"  color="green" />

                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Button  icon="check mark" fluid labelPosition="left" content="Spending 24/7"  color="green" />

                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Button  icon="check mark" fluid labelPosition="left" content="Debit Cards"  color="green" />

                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

             </Segment>
             <Segment vertical style={{padding: '3em 1em'}}>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column>
                                <Header style={{fontSize: '1.5em'}} as="h2" content="Medium or Large level businesses" />
                                <p style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.1em', fontStyle: 'normal'}}>
                                We are here to Acelerate your business and help you find the way out.
                                </p>
                            </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                <p style={{backgroundImage: 'linear-gradient(#fff, #f6f6f6, #fff)'}}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                            <Button  icon="check mark" fluid labelPosition="left" content="Coporate"  color="green" />

                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                            <Button  icon="check mark" fluid labelPosition="left" content="Payments"  color="green" />

                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                            <Button  icon="check mark" fluid labelPosition="left" content="Automation"  color="green" />

                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                            <Button  icon="check mark" fluid labelPosition="left" content="Features"  color="green" />

                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                            <Button  icon="check mark" fluid labelPosition="left" content="Support"  color="green" />

                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Button  icon="check mark" fluid labelPosition="left" content="Direct Debit"  color="green" />
                                                   
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

             </Segment>
             <Segment vertical style={{padding: '3em 1em'}}>
                    <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column>
                            <Header style={{fontSize: '1.5em'}} as="h2" content="Easy payment to borrow free get a better filling at home" />
                            <p style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.1em', fontStyle: 'normal'}}>
                            Discover our loans and mortgages tailored to provide capital for you to start your new business venture, own your dream home or upgrade your car.
                            </p>
                            <p>
                                <Button size="large" color="green">
                                    Get Started
                                </Button>
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <p id="grad1" >
                            <Image centered src="./images/invoice.png" />

                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
             </Segment>
             <Segment vertical style={{padding: '3em 1em'}}>
                    <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column id="customer">
                            <Header style={{fontSize: '1.5em'}} as="h2" content="We always try to understand customers expectation" />
                            <p  style={{fontSize: '1.1em', wordSpacing: '0.1em', fontStyle: 'normal'}}>
                                Whether you want to consolidate credit card debt, cover medical expenses, or make needed home improvements, a Swiftcope Personal Loan can help you get it done fast: Check your rate with no impact to your credit score. No fee to apply or close. No collateral required. Quick online application & pre-qualification. ePay discount
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                        <Statistic size="mini">
                            <Statistic.Value>180K</Statistic.Value>
                            <Statistic.Label>Downloaded</Statistic.Label>
                        </Statistic>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Statistic size="mini">
                            <Statistic.Value>20K</Statistic.Value>
                            <Statistic.Label>Feedback</Statistic.Label>
                        </Statistic>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                        <Statistic size="mini">
                            <Statistic.Value>500K</Statistic.Value>
                            <Statistic.Label>Workers</Statistic.Label>
                        </Statistic>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Statistic size="mini">
                            <Statistic.Value>70K</Statistic.Value>
                            <Statistic.Label>Contributors</Statistic.Label>
                        </Statistic>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>

             </Segment>
             <Segment vertical style={{padding: '3em 1em'}}>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Header style={{fontSize: '1.5em'}} as="h4" content="Have any question about us?" />
                                                <p style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.1em', fontStyle: 'normal'}}>
                                                    Do not hesitate to contact us
                                                </p>
                                                <Button size="large" color="youtube">
                                                    CONTACT US
                                                </Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header style={{fontSize: '1.5em'}} as="h2" content="You can find all the thing you need to payout" />
                                    <p style={{display: 'block', fontSize: '1.1em', wordSpacing: '0.1em', fontStyle: 'normal'}}>
                                    Take advantage of our digital payment solutions designed to help organisations and businesses manage easy payments
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                        <Button size="small" color="youtube">
                                            <Icon size="big" name="apple" />Download on<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Apple Store
                                        </Button>
                                        <Button size="small" color="green">
                                        <Icon size="big" name="google play" />Download on <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Google play

                                        </Button>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>

             </Segment>
             <FooterMobile />
        </>
       
    )
}