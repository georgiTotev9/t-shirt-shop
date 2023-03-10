import { useState, useEffect } from 'react';
import { getOne } from '../../services/productService';
import { addCartProduct } from '../../services/shoppingCartService';
import { useParams, Link, useNavigate } from 'react-router-dom';
import DetailsDialog from '../Common/DetailsDialog/DetailsDialog';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import './Details.css';
import { useAuth } from '../../contexts/AuthContext';
import PopoverComponent from './PopoverComponent';

const Details = () => {
    const { productId } = useParams();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [size, setSize] = useState('Size');
    const [count, setCount] = useState('Count');
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        getOne(productId).then((productSnapshot) =>
            setProduct(productSnapshot.data())
        );
    }, [productId]);

    const addToCartHandler = () => {
        addCartProduct({
            name: product.name,
            quantity: count,
            price: product.price,
            size: size,
        }).then(() => setShowDialog(true));
    };


    return (
        <>
            <DetailsDialog
                show={showDialog}
                onClose={() => setShowDialog(false)}
                onContinueShopping={() => navigate('/shop-catalog')}
                onCart={() => navigate('/shopping-cart')}
            />
            <section className='bg-light'>
                <div className='container pb-5'>
                    <div className='row'>
                        <div className='col-lg-5 mt-5'>
                            <div className='card mb-3'>
                                <img
                                    className='card-img img-fluid details-image'
                                    src={product?.imageUrl}
                                    alt=''
                                    id='product-detail'
                                />
                            </div>
                        </div>
                        <div className='col-lg-7 mt-5'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h1 className='h2'>{product?.name}</h1>
                                    <p className='h3 py-2'>
                                        ${product?.price}.00
                                    </p>
                                    <ul className='list-inline'>
                                        <li className='list-inline-item'>
                                            <h6>Brand:</h6>
                                        </li>
                                        <li className='list-inline-item'>
                                            <p className='text-muted'>
                                                <strong>Georgi's brand</strong>
                                            </p>
                                        </li>
                                    </ul>

                                    <h6>Description:</h6>
                                    <span>
                                        {product?.name} made from 100% cotton.
                                    </span>

                                    <h6>Specification:</h6>
                                    <ul className='list-unstyled pb-3'>
                                        <li>High quality.</li>
                                        <li>Original design.</li>
                                        <li>Made in Bulgaria.</li>
                                        <li>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                        </li>
                                    </ul>
                                    <div className='details-buttons'>
                                        <div
                                            className='dropdowns'
                                            style={{
                                                display: 'inline',
                                                margin: '20px',
                                            }}>
                                            <Dropdown
                                                onSelect={(eventKey) =>
                                                    setSize(eventKey)
                                                }
                                                style={{
                                                    display: 'inline',
                                                    margin: '15px',
                                                }}>
                                                <Dropdown.Toggle
                                                    variant='success'
                                                    id='dropdown-basic'>
                                                    {size}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey='S'>
                                                        S
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey='M'>
                                                        M
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey='L'>
                                                        L
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey='XL'>
                                                        XL
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                            <Dropdown
                                                onSelect={(eventKey) =>
                                                    setCount(eventKey)
                                                }
                                                style={{
                                                    display: 'inline',
                                                    margin: '15px',
                                                }}>
                                                <Dropdown.Toggle
                                                    variant='success'
                                                    id='dropdown-basic'>
                                                    {count}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey='1'>
                                                        1
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey='2'>
                                                        2
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey='3'>
                                                        3
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey='4'>
                                                        4
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey='5'>
                                                        5
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>

                                        <br />
                                        {!isAuthenticated ? (
                                            <PopoverComponent title='Not logged in!'>
                                                <strong>
                                                    You must be logged in to add
                                                    items to your shopping cart.
                                                </strong>
                                                <Link to='/login'>
                                                    {' '}
                                                    Login here!
                                                </Link>
                                            </PopoverComponent>
                                        ) : size != 'Size' &&
                                          count != 'Count' ? (
                                            <Button
                                                variant='primary'
                                                size='lg'
                                                className='cart-button'
                                                onClick={addToCartHandler}
                                                style={{
                                                    marginTop: '15px',
                                                }}>
                                                Add to card
                                            </Button>
                                        ) : (
                                            <PopoverComponent title='Not selected!'>
                                                <strong>
                                                    You must select size and
                                                    count.
                                                </strong>
                                            </PopoverComponent>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Details;
