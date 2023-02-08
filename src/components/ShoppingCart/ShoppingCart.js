import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import './ShoppingCart.css';

const ShoppingCart = () => {
    return (
        <>
            <h1>Your Shopping Cart</h1>
            <div className='cart-container'>
                <h3 className='subtitle'>Products:</h3>
                <ListGroup as='ol' numbered className='shop-list'>
                    <ListGroup.Item
                        as='li'
                        className='d-flex justify-content-between align-items-start shop-list'>
                        <div className='ms-2 me-auto'>
                            <div className='fw-bold'>Subheading</div>
                            Cras justo odio
                        </div>
                        <Badge bg='primary' pill >
                            Count: 14
                        </Badge>
                        <CloseButton />
                    </ListGroup.Item>
                </ListGroup>
                <h4 className='total-subtitle'>Total Price: $25.00</h4>
            </div>
        </>
    );
};

export default ShoppingCart;
