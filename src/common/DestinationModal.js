import { Modal, Header, Accordion, Icon } from "semantic-ui-react"
export const DestinationModal = ({open, size, close}) => {

    const panel = [
        {
            key: '1',
            title: 'To Swift',
            content: 'Beneficiary Account'
        },
        {
            key: '3',
            title: 'To Other Banks',
            content: 'Beneficiary Account'
        }

    ]
    return(
        <Modal
        open={open}
        size={size}
        >
        <Modal.Header>
            <Icon onClick={() => close()} name="long arrow alternate left"  />
            <span>Destination</span>
        </Modal.Header>
        <Modal.Content>
            <Modal.Description style={{paddingBottom: '5em'}}>
                <Header as="h3" content="Where do you want to sent the money?" />
                <Accordion panels={panel} styled />
            </Modal.Description>
        </Modal.Content>
        </Modal>
    )
} 



