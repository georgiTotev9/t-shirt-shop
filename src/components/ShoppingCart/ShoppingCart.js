import CartList from './CartList';
import { getCart } from '../../services/shoppingCartService';
import './ShoppingCart.css';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const ShoppingCart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCart().then((cart) => {
            const arr = cart.docs.map((x) => x.data());
            setCartProducts(arr);
            setLoading(false);
        });
    }, []);

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
                        {cartProducts.map((product) => (
                            <CartList product={product} />
                        ))}
                        <h4 className='total-subtitle'>Total Price: $25.00</h4>
                    </>
                )}
            </div>
        </>
    );
};

export default ShoppingCart;
