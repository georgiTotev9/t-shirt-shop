const MostPopular = () => {
    return (
        <section className='bg-light'>
            <div className='container py-5'>
                <div className='row text-center py-3'>
                    <div className='col-lg-6 m-auto'>
                        <h1 className='h1'>Most Popular</h1>
                        <p>Our best seller t-shirts!</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-4 mb-4'>
                        <div className='card h-100'>
                            <img
                                src='/assets/img/mostpopular_image_1.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <div className='card-body'>
                                <ul className='list-unstyled d-flex justify-content-between'>
                                    <li>
                                        <i className='text-warning fa fa-star'></i>
                                        <i className='text-warning fa fa-star'></i>
                                        <i className='text-warning fa fa-star'></i>
                                        <i className='text-warning fa fa-star'></i>
                                        <i className='text-muted fa fa-star'></i>
                                    </li>
                                    <li className='text-muted text-right'>
                                        $20.00
                                    </li>
                                </ul>
                                <span className='h2 text-decoration-none text-dark'>
                                    T-shirt Art Series
                                </span>
                                <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Sunt in culpa qui officia
                                    deserunt.
                                </p>
                                <p className='text-muted'>Reviews (24)</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 mb-4'>
                        <div className='card h-100'>
                            <img
                                src='/assets/img/mostpopular_image_2.jpg'
                                className='card-img-top'
                                alt='...'
                            />
                            <div className='card-body'>
                                <ul className='list-unstyled d-flex justify-content-between'>
                                    <li>
                                        <i className='text-warning fa fa-star'></i>
                                        <i className='text-warning fa fa-star'></i>
                                        <i className='text-warning fa fa-star'></i>
                                        <i className='text-warning fa fa-star'></i>
                                        <i className='text-muted fa fa-star'></i>
                                    </li>
                                    <li className='text-muted text-right'>
                                        $25.00
                                    </li>
                                </ul>
                                <span className='h2 text-decoration-none text-dark'>
                                    T-shirt Bruce Lee
                                </span>
                                <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Sunt in culpa qui officia
                                    deserunt.
                                </p>
                                <p className='text-muted'>Reviews (48)</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 mb-4'>
                        <div className='card h-100'>
                            <img
                                src='/assets/img/mostpopular_image_3.jpg'
                                className='card-img-top'
                                alt='...'
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
                                        $30.00
                                    </li>
                                </ul>
                                <span className='h2 text-decoration-none text-dark'>
                                    Baseball Shirt
                                </span>
                                <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Sunt in culpa qui officia
                                    deserunt.
                                </p>
                                <p className='text-muted'>Reviews (74)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MostPopular;
