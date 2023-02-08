import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import { getCart } from '../../services/shoppingCartService';
import './ShoppingCart.css';
import { useEffect, useState } from 'react';

const ShoppingCart = () => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        getCart().then((cart) => {
            const arr = cart.docs.map((x) => x.data());
            setCartProducts(arr);
        });
    }, []);

    //TODO: add component for cart list and spinner for loading

    return (
        <>
            <h1>Your Shopping Cart</h1>
            <div className='cart-container'>
                <h3 className='subtitle'>Products:</h3>
                {cartProducts.map((product) => (
                    <ListGroup
                        as='ol'
                        numbered
                        className='shop-list'
                        key={product.id}>
                        <ListGroup.Item
                            as='li'
                            className='d-flex justify-content-between align-items-start shop-list'>
                            <div className='ms-2 me-auto'>
                                <div className='fw-bold'>{product.name}</div>
                                smth here
                            </div>
                            <Badge bg='primary' pill>
                                {product.quantity}
                            </Badge>
                            <CloseButton />
                        </ListGroup.Item>
                    </ListGroup>
                ))}

                <h4 className='total-subtitle'>Total Price: $25.00</h4>
            </div>
        </>
    );
};

export default ShoppingCart;
