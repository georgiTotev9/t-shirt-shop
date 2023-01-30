import './OurBrands.css';

const OurBrands = () => {
    return (
        <section className='bg-light py-5'>
            <div className='container my-4'>
                <div className='row text-center py-3'>
                    <div className='col-lg-6 m-auto'>
                        <h1 className='h1'>Our Brands</h1>
                        <br />
                    </div>
                    <div className='col-lg-9 m-auto tempaltemo-carousel'>
                        <div className='row d-flex flex-row'>
                            <div className='col'>
                                <div
                                    className='carousel-inner product-links-wap'
                                    role='listbox'>
                                    <div className='carousel-item active'>
                                        <div className='row'>
                                            <div className='col-3 p-md-5'>
                                                <a
                                                    href='https://www.levi.com'
                                                    target='_blank'
                                                    rel='noreferrer'>
                                                    <img
                                                        className='img-fluid brand-img'
                                                        src='assets/img/brand_01.png'
                                                        alt='Brand Logo'
                                                    />
                                                </a>
                                            </div>
                                            <div className='col-3 p-md-5'>
                                                <a href='https://www.adidas.com'>
                                                    <img
                                                        className='img-fluid brand-img'
                                                        src='assets/img/brand_02.png'
                                                        alt='Brand Logo'
                                                    />
                                                </a>
                                            </div>
                                            <div className='col-3 p-md-5'>
                                                <a
                                                    href='https://www.nike.com'
                                                    target='_blank'
                                                    rel='noreferrer'>
                                                    <img
                                                        className='img-fluid brand-img'
                                                        src='assets/img/brand_03.png'
                                                        alt='Brand Logo'
                                                    />
                                                </a>
                                            </div>
                                            <div className='col-3 p-md-5'>
                                                <a
                                                    href='https://www.hm.com'
                                                    target='_blank'
                                                    rel='noreferrer'>
                                                    <img
                                                        className='img-fluid brand-img'
                                                        src='assets/img/brand_04.png'
                                                        alt='Brand Logo'
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurBrands;
