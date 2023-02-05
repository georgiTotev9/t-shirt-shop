import { useState, useEffect } from 'react';
import { getOne } from '../../services/productService';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Details = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [size, setSize] = useState('Size');

    useEffect(() => {
        getOne(productId).then((productSnapshot) =>
            setProduct(productSnapshot.data())
        );
    }, [productId]);

    return (
        <section className='bg-light'>
            <div className='container pb-5'>
                <div className='row'>
                    <div className='col-lg-5 mt-5'>
                        <div className='card mb-3'>
                            <img
                                className='card-img img-fluid'
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
                                // TODO: set dropdown selection to be visible
                                <Dropdown
                                    onChange={(e) => {
                                        setSize(e.currentTarget.textContent)
                                        console.log(e.currentTarget.textContent);
                                        }}>
                                    <Dropdown.Toggle
                                        variant='success'
                                        id='dropdown-basic'>
                                        {size}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item>S</Dropdown.Item>
                                        <Dropdown.Item>M</Dropdown.Item>
                                        <Dropdown.Item>L</Dropdown.Item>
                                        <Dropdown.Item>XL</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
