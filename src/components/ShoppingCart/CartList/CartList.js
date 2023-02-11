import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import Badge from 'react-bootstrap/Badge';

const CartList = ({ product }) => {
    return (
            <ListGroup.Item
                as='li'
                className='d-flex justify-content-between align-items-start shop-list'>
                <div className='ms-2 me-auto'>
                    <div className='fw-bold'>{product.name}</div>
                    Price: ${product.price * product.quantity}.00
                </div>
                <Badge bg='primary' pill className='count'>
                    {product.quantity}
                </Badge>
                <CloseButton className='close' />
            </ListGroup.Item>
    );
};

export default CartList;
