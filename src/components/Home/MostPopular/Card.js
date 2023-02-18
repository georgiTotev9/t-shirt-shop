const Card = ({ product }) => {
    return (
        <div className='col-12 col-md-4 mb-4'>
            <div className='card h-100'>
                <img
                    src={product.imageUrl}
                    className='card-img-top'
                    alt='...'
                    style={{ maxHeight: '525px'}}
                />
                <div className='card-body'>
                    <ul className='list-unstyled d-flex justify-content-between'>
                        <li>
                            <i className='text-warning fa fa-star'></i>
                            <i className='text-warning fa fa-star'></i>
                            <i className='text-warning fa fa-star'></i>
                            <i className='text-warning fa fa-star'></i>
                            <i className='text-warning fa fa-star'></i>
                        </li>
                        <li className='text-muted text-right'>
                            ${product.price}.00
                        </li>
                    </ul>
                    <span className='h2 text-decoration-none text-dark'>
                        {product.name}
                    </span>
                    <p className='card-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt in culpa qui officia deserunt.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
