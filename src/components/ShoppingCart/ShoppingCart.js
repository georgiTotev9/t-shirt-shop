import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const ShoppingCart = () => {
    return (
        <ListGroup as='ol' numbered className='shop-list'>
            <ListGroup.Item
                as='li'
                className='d-flex justify-content-between align-items-start shop-list'>
                <div className='ms-2 me-auto'>
                    <div className='fw-bold'>Subheading</div>
                    Cras justo odio
                </div>
                <Badge bg='primary' pill>
                    14
                </Badge>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default ShoppingCart;
