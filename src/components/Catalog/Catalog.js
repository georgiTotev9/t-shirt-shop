import { getAll } from '../../services/productService';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './Catalog.css';

const Catalog = () => {
    const [resultProducts, setResultProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAll().then((res) => {
            const arr = res.docs.map((x) => x.data());
            setResultProducts(arr);
            setProducts(arr);
        });
    }, []);

    // TODO: apply 2 filters at once

    const priceFilterHandler = (e) => {
        let sortBy = e.currentTarget.value;

        if (sortBy == 'above') {
            setResultProducts(products.filter((x) => x.price >= 25));
        } else if (sortBy == 'under') {
            setResultProducts(products.filter((x) => x.price < 25));
        } else {
            setResultProducts([...products]);
        }
    };

    const typeFilterHandler = (e) => {
        e.preventDefault();
        let sortBy = e.currentTarget.textContent;

        if (sortBy == 'Shirts') {
            setResultProducts(products.filter((x) => x.type == 'shirt'));
        } else if (sortBy == 'T-shirts') {
            setResultProducts(products.filter((x) => x.type == 't-shirt'));
        } else {
            setResultProducts([...products]);
        }
    };

    const searchHandler = (e) => {
        let searchWord = e.currentTarget.value;

        if (searchWord) {
            setResultProducts(
                products.filter((x) => x.name.includes(searchWord))
            );
        } else {
            setResultProducts([...products]);
        }
    };

    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-3'>
                    <h1 className='h2 pb-4'>Categories</h1>
                    <ul className='list-unstyled templatemo-accordion'>
                        <li className='pb-3'>
                            <a
                                className='collapsed d-flex justify-content-between h3 text-decoration-none'
                                href='#'>
                                Gender
                                <i className='fa fa-fw fa-chevron-circle-down mt-1'></i>
                            </a>
                            <ul className='collapse show list-unstyled pl-3'>
                                <li>
                                    <a
                                        className='text-decoration-none'
                                        href='#'>
                                        Men
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='text-decoration-none'
                                        href='#'>
                                        Women
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className='pb-3'>
                            <a
                                className='collapsed d-flex justify-content-between h3 text-decoration-none'
                                href='#'>
                                Sale
                                <i className='pull-right fa fa-fw fa-chevron-circle-down mt-1'></i>
                            </a>
                            <ul
                                id='collapseTwo'
                                className='collapse list-unstyled pl-3'>
                                <li>
                                    <a
                                        className='text-decoration-none'
                                        href='#'>
                                        Sport
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='text-decoration-none'
                                        href='#'>
                                        Luxury
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className='pb-3'>
                            <a
                                className='collapsed d-flex justify-content-between h3 text-decoration-none'
                                href='#'>
                                Product
                                <i className='pull-right fa fa-fw fa-chevron-circle-down mt-1'></i>
                            </a>
                            <ul
                                id='collapseThree'
                                className='collapse list-unstyled pl-3'>
                                <li>
                                    <a
                                        className='text-decoration-none'
                                        href='#'>
                                        Bag
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='text-decoration-none'
                                        href='#'>
                                        Sweather
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='text-decoration-none'
                                        href='#'>
                                        Sunglass
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='col-lg-9'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <ul className='list-inline shop-top-menu pb-3 pt-1'>
                                <li className='list-inline-item'>
                                    <a
                                        className='h3 text-dark text-decoration-none mr-3'
                                        href=''
                                        onClick={typeFilterHandler}>
                                        All
                                    </a>
                                </li>
                                <li className='list-inline-item'>
                                    <a
                                        className='h3 text-dark text-decoration-none mr-3'
                                        href=''
                                        onClick={typeFilterHandler}>
                                        Shirts
                                    </a>
                                </li>
                                <li className='list-inline-item'>
                                    <a
                                        className='h3 text-dark text-decoration-none'
                                        href=''
                                        onClick={typeFilterHandler}>
                                        T-shirts
                                    </a>
                                </li>
                            </ul>
                            <InputGroup className='mb-3'>
                                <InputGroup.Text id='inputGroup-sizing-default'>
                                    Search
                                </InputGroup.Text>
                                <Form.Control
                                    aria-label='Default'
                                    aria-describedby='inputGroup-sizing-default'
                                    onChange={searchHandler}
                                />
                            </InputGroup>
                        </div>
                        <div className='col-md-6 pb-4'>
                            <div className='d-flex'>
                                <select
                                    className='form-control'
                                    onChange={priceFilterHandler}>
                                    <option value='all'>All</option>
                                    <option value='under'>Under $25</option>
                                    <option value='above'>Above $25</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='products'>
                        {resultProducts.length > 0 ? (
                            resultProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        ) : (
                            <Spinner animation='border' variant='success' />
                        )}
                    </div>

                    <div className='row'>
                        <ul className='pagination pagination-lg justify-content-end'>
                            <li className='page-item disabled'>
                                <a
                                    className='page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0'
                                    href='#'
                                    tabIndex='-1'>
                                    1
                                </a>
                            </li>
                            <li className='page-item'>
                                <a
                                    className='page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark'
                                    href='#'>
                                    2
                                </a>
                            </li>
                            <li className='page-item'>
                                <a
                                    className='page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark'
                                    href='#'>
                                    3
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
