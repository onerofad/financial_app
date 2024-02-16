import { Grid, Icon, List, Modal } from "semantic-ui-react"

export const Faq = ({open, size, close}) => {

    return(
        <Modal
            open={open}
            size={size}
        >
            <Modal.Header>
                Frequently Asked Questions
                <Icon style={{float: 'right'}} name="close" onClick={() => close()} />
            </Modal.Header>
            <Modal.Content>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <List relaxed size="large">
                                <List.Item>
                                    1. How to find a payment if I do not see it in History?
                                    All your payments, service and card payments can be seen in Statement. To keep your payment in History for longer, mark a payment in History as Defined.
                                </List.Item>
                                <List.Item>
                                    2. How to print details of a payment that is not in History?
                                    Save needed payment as “Template” in old internet bank and within 1 day it will appear in History of new internet bank. Now you can view, print or make a new payment based on this transaction on any moment from History. Migrated payment will stay in History as long as you do not unmark in in tick-box “Defined”.
                                </List.Item>
                                <List.Item>
                                    3. Which transactions need SMS confirmation?
                                    All transactions are confirmed with SMS, except payments between your own accounts and currency exchange. Adding funds to existing deposits are also considered as transaction between own accounts and do not need SMS confirmation.

                                </List.Item>
                                <List.Item>
                                    4. What is the difference between Balance and Available amounts?
                                    Balance is the amount of money on your bank account. Available – amounts available to you, including credits, minus reserved amounts.      
                                </List.Item>
                                <List.Item>
                                    5. What are reserved amounts?
                                    Reserved amounts perform card(s) transactions that haven’t been yet reflected on your bank account(s). Thereby, you can see this funds in Internet bank, but cannot use.
                                </List.Item>
                                <List.Item>
                                    6. Where can I get account statement for periods until 2012?
                                    You can get account statement for periods earlier that 2012 in any branch office of the Bank.
                                </List.Item>
                                <List.Item>
                                    7. What is security code?
                                    For your convenience, instead of all requisites of a transaction you will get a short code of three (3) letters in confirming SMS. Identical code you will see on the screen in your Internet bank while confirming a transaction.
                                </List.Item>
                                <List.Item>
                                    8. Where are my defined payments?
                                    Your defined payments are in menu Payments - History.
                                </List.Item>
                                <List.Item>
                                    9 How to create a defined payment?
                                    Mark any payment in History as Defined.
                                </List.Item>
                                <List.Item>
                                    10. Why does Internet bank open in Russian language?
                                    Language in Internet bank is determined by default according to the settings of your browser, but you can change it on any page of Internet bank.                  
                                </List.Item>
                                <List.Item>
                                    11. I cannot find button Refresh?
                                    You can use Refresh button in browser instead.
                                </List.Item>

                            </List>           
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Modal.Content>
        </Modal>
    )
}


