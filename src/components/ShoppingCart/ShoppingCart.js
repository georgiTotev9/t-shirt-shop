import CartList from './CartList';
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
                    <CartList product={product} />
                ))}

                <h4 className='total-subtitle'>Total Price: $25.00</h4>
            </div>
        </>
    );
};

export default ShoppingCart;
