import CartList from './CardItem';
import { getCart } from '../../services/shoppingCartService';
import './ShoppingCart.css';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import { deleteCartProduct } from '../../services/shoppingCartService';

const ShoppingCart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCart().then((cart) => {
            const arr = cart.docs;
            arr.pop();
            setCartProducts(arr);
            setLoading(false);
        });
    }, []);

    const deleteHandler = (productId) => {
        deleteCartProduct(productId).then(() =>
            setCartProducts((oldstate) =>
                oldstate.filter((x) => x.id != productId)
            )
        );
    };

    return (
        <>
            <h1>Your Shopping Cart</h1>
            <div className='cart-container'>
                <h3 className='subtitle'>Products:</h3>
                {cartProducts.length < 1 ? (
                    loading ? (
                        <Spinner animation='border' variant='success' />
                    ) : (
                        <h4 className='total-subtitle'>
                            You ShoppingCart is Empty.
                        </h4>
                    )
                ) : (
                    <>
                        <ListGroup as='ol' numbered className='shop-list'>
                            {cartProducts.map((product) => (
                                <CartList
                                    product={product.data()}
                                    productId={product.id}
                                    key={product.id}
                                    deleteHandler={deleteHandler}
                                />
                            ))}
                        </ListGroup>
                        <h4 className='total-subtitle'>Total Price: $25.00</h4>
                    </>
                )}
            </div>
        </>
    );
};

export default ShoppingCart;
