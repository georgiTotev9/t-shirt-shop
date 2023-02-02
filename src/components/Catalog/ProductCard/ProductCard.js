import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link
            to={`/details/${product.id}`}
            style={{ textDecoration: 'none', color: 'black' }}>
            <div className='col-md-4'>
                <div className='card mb-4 product-wap rounded-0'>
                    <div className='card rounded-0'>
                        <img
                            className='card-img rounded-0 img-fluid'
                            src={product.imageUrl}
                            alt=''
                        />
                        <div className='card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center'></div>
                    </div>
                    <div className='card-body'>
                        <span
                            href='shop-single.html'
                            className='h3 text-decoration-none'>
                            {product.name}
                        </span>
                        <ul className='w-100 list-unstyled d-flex justify-content-between mb-0'>
                            <br />
                            <li className='pt-2'>
                                <span className='product-color-dot color-dot-red float-left rounded-circle ml-1'></span>
                                <span className='product-color-dot color-dot-blue float-left rounded-circle ml-1'></span>
                                <span className='product-color-dot color-dot-black float-left rounded-circle ml-1'></span>
                                <span className='product-color-dot color-dot-light float-left rounded-circle ml-1'></span>
                                <span className='product-color-dot color-dot-green float-left rounded-circle ml-1'></span>
                            </li>
                        </ul>
                        <p className='text-center mb-0'>${product.price}.00</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
