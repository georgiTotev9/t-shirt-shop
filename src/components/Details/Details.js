import { useState, useEffect } from 'react';
import { getOne } from '../../services/productService';
import { useParams, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './Details.css';
import { useAuth } from '../../contexts/AuthContext';

const Details = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const { isAuthenticated } = useAuth();
    const [size, setSize] = useState('Size');
    const [count, setCount] = useState('Count');

    useEffect(() => {
        getOne(productId).then((productSnapshot) =>
            setProduct(productSnapshot.data())
        );
    }, [productId]);

    const popoverButton = (
        <OverlayTrigger
            trigger='click'
            placement='bottom'
            overlay={
                <Popover id='popover-positioned-bottom'>
                    <Popover.Header as='h3'>Not logged in!</Popover.Header>
                    <Popover.Body>
                        <strong>
                            You must be logged in to add items to your shopping
                            cart.
                        </strong>
                        <Link to='/login'> Login here!</Link>
                    </Popover.Body>
                </Popover>
            }>
            <Button variant='primary' size='lg' className='cart-button'>
                Add to card
            </Button>
        </OverlayTrigger>
    );

    return (
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
                                <p className='h3 py-2'>${product?.price}.00</p>
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
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
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
                                        popoverButton
                                    ) : (
                                        <Link to='/shopping-cart'>
                                            <Button
                                                variant='primary'
                                                size='lg'
                                                className='cart-button'
                                                style={{
                                                    marginTop: '15px',
                                                }}>
                                                Add to card
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
