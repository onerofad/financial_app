import { Button, Divider, Grid, Header, Icon, List, Modal, Segment } from "semantic-ui-react"
import { useGetTransferHistoryQuery } from "../features/api/apiSlice"
import Moment from "react-moment"
import { NumericFormat } from "react-number-format"

export const HistoryModal = ({open, size, close}) => {

    const {data: transfers, isSuccess} = useGetTransferHistoryQuery()
    let transfer_output
    if(isSuccess){
        let transfer = transfers.find(t => t.account === sessionStorage.getItem("accId"))            
        if(transfer){
           transfer_output = transfers.map(trans => {
            if(trans.account === sessionStorage.getItem("accId")){
               const price = trans.amount;
               const formattedPrice = price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });         
               return(
                <>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as="h4">
                                <Moment format="MMMM Do, YYYY">{trans.trans_date}</Moment><br/>
                                <span style={{color: 'red'}}>-{formattedPrice}</span><br/>
                                <span>You Transfered {formattedPrice} to {trans.to_fname} {trans.to_lname}</span>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider />
                </>          
               )
            }else if(trans.accountNo === sessionStorage.getItem("accId")){
                const price = trans.amount;
                const formattedPrice = price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });         
                return(
                 <>
                     <Grid.Row>
                         <Grid.Column>
                             <Header as="h4">
                                 <Moment format="MMMM Do, YYYY">{trans.trans_date}</Moment><br/>
                                 <span style={{color: 'green'}}>{formattedPrice}</span><br/>
                                 <span>{formattedPrice} has been delivered to you from {trans.fname} {trans.lname}</span>
                             </Header>
                         </Grid.Column>
                     </Grid.Row>
                     <Divider />
                 </>          
                )
             }            
        }) 
        }
    }
    return(
        <>
        <div >
        <Modal
                open={open}
                size={size}
                
                
            >
                <Modal.Header style={{backgroundColor: 'red'}}>
                   
                    <Icon  onClick={() => close()} secondary inverted style={{float: 'left'}} circular name="long arrow alternate left" />
                    <Header inverted as="h1" textAlign="center">
                        Transaction History
                    <Header inverted textAlign="center" as="h3" content={sessionStorage.getItem("accId") + " - " + sessionStorage.getItem("acctype")} />               
                    </Header>
                          
                </Modal.Header>
                <Modal.Content style={{maxHeight: 400, overflowY: 'auto'}}>
                    <Grid>
                                      
                        {transfer_output}

                    </Grid>
                </Modal.Content>
            </Modal>
        </div>
           
        </>
    )
}