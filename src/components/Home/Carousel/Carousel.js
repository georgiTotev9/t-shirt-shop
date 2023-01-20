import './Carousel.css';

const Carousel = () => {
    return (
        <div
            id='template-mo-zay-hero-carousel'
            className='carousel slide'
            data-bs-ride='carousel'>
            <ol className='carousel-indicators'>
                <li
                    data-bs-target='#template-mo-zay-hero-carousel'
                    data-bs-slide-to='0'
                    className='active'></li>
                <li
                    data-bs-target='#template-mo-zay-hero-carousel'
                    data-bs-slide-to='1'></li>
                <li
                    data-bs-target='#template-mo-zay-hero-carousel'
                    data-bs-slide-to='2'></li>
            </ol>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <div className='container'>
                        <div className='row p-5'>
                            <div className='mx-auto col-md-8 col-lg-6 order-lg-last'>
                                <img
                                    className='img-fluid'
                                    src='/assets/img/carousel_image_1.jpg'
                                    alt=''
                                />
                            </div>
                            <div className='col-lg-6 mb-0 d-flex align-items-center'>
                                <div className='text-align-left align-self-center'>
                                    <h1 className='h1 text-success'>
                                        <b>Georgi's</b> Shop
                                    </h1>
                                    <h3 className='h2'>
                                        Stylish and comfortable.
                                    </h3>
                                    <p>Get our latest T-shirt collection!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel-item'>
                    <div className='container'>
                        <div className='row p-5'>
                            <div className='mx-auto col-md-8 col-lg-6 order-lg-last'>
                                <img
                                    className='img-fluid'
                                    src='/assets/img/carousel_image_2.jpg'
                                    alt=''
                                />
                            </div>
                            <div className='col-lg-6 mb-0 d-flex align-items-center'>
                                <div className='text-align-left'>
                                    <h1 className='h1'>Be more active!</h1>
                                    <h3 className='h2'>Sport T-shirts</h3>
                                    <p>
                                        We released our new Sport T-shirt
                                        Collection - "Be more active". It is
                                        specially made for the best athletes.
                                        Check it out!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel-item'>
                    <div className='container'>
                        <div className='row p-5'>
                            <div className='mx-auto col-md-8 col-lg-6 order-lg-last'>
                                <img
                                    className='img-fluid'
                                    src='/assets/img/carousel_image_3.jpg'
                                    alt=''
                                />
                            </div>
                            <div className='col-lg-6 mb-0 d-flex align-items-center'>
                                <div className='text-align-left'>
                                    <h1 className='h1'>Be more stylish!</h1>
                                    <h3 className='h2'>
                                        Shirts
                                    </h3>
                                    <p>
                                        Our shirt collection is insanely cool so check it out!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a
                className='carousel-control-prev text-decoration-none w-auto ps-3'
                href='#template-mo-zay-hero-carousel'
                role='button'
                data-bs-slide='prev'>
                <i className='fas fa-chevron-left'></i>
            </a>
            <a
                className='carousel-control-next text-decoration-none w-auto pe-3'
                href='#template-mo-zay-hero-carousel'
                role='button'
                data-bs-slide='next'>
                <i className='fas fa-chevron-right'></i>
            </a>
        </div>
    );
};

export default Carousel;
