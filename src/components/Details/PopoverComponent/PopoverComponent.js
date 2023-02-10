import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const PopoverComponent = ({ children }) => {
    return (
        <OverlayTrigger
            trigger='click'
            placement='bottom'
            overlay={
                <Popover id='popover-positioned-bottom'>
                    <Popover.Header as='h3'>Not logged in!</Popover.Header>
                    <Popover.Body>{children}</Popover.Body>
                </Popover>
            }>
            <Button
                variant='primary'
                size='lg'
                className='cart-button'
                style={{
                    marginTop: '15px',
                }}>
                Add to card
            </Button>
        </OverlayTrigger>
    );
};

export default PopoverComponent;
