import { useState, useEffect } from 'react';
import { getOne } from '../../services/productService';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

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
                                alt='Card image cap'
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
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                </ul>

                                <form action='' method='GET'>
                                    <input
                                        type='hidden'
                                        name='product-title'
                                        value='Activewear'
                                    />
                                    <div className='row'>
                                        <div className='col-auto'>
                                            <ul className='list-inline pb-3'>
                                                <li className='list-inline-item'>
                                                    Size :
                                                    <input
                                                        type='hidden'
                                                        name='product-size'
                                                        id='product-size'
                                                        value='S'
                                                    />
                                                </li>
                                                <li className='list-inline-item'>
                                                    <span className='btn btn-success btn-size'>
                                                        S
                                                    </span>
                                                </li>
                                                <li className='list-inline-item'>
                                                    <span className='btn btn-success btn-size'>
                                                        M
                                                    </span>
                                                </li>
                                                <li className='list-inline-item'>
                                                    <span className='btn btn-success btn-size'>
                                                        L
                                                    </span>
                                                </li>
                                                <li className='list-inline-item'>
                                                    <span className='btn btn-success btn-size'>
                                                        XL
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='col-auto'>
                                            <ul className='list-inline pb-3'>
                                                <li className='list-inline-item text-right'>
                                                    Quantity
                                                    <input
                                                        type='hidden'
                                                        name='product-quanity'
                                                        id='product-quanity'
                                                        value='1'
                                                    />
                                                </li>
                                                <li className='list-inline-item'>
                                                    <span
                                                        className='btn btn-success'
                                                        id='btn-minus'>
                                                        -
                                                    </span>
                                                </li>
                                                <li className='list-inline-item'>
                                                    <span
                                                        className='badge bg-secondary'
                                                        id='var-value'>
                                                        1
                                                    </span>
                                                </li>
                                                <li className='list-inline-item'>
                                                    <span
                                                        className='btn btn-success'
                                                        id='btn-plus'>
                                                        +
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='row pb-3'>
                                        <div className='col d-grid'>
                                            <button
                                                type='submit'
                                                className='btn btn-success btn-lg'
                                                name='submit'
                                                value='buy'>
                                                Buy
                                            </button>
                                        </div>
                                        <div className='col d-grid'>
                                            <button
                                                type='submit'
                                                className='btn btn-success btn-lg'
                                                name='submit'
                                                value='addtocard'>
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
