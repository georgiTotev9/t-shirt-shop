import OurBrands from './OurBrands';
import OurServices from './OurServices';

const About = () => {
    return (
        <>
            <section className='bg-success py-5'>
                <div className='container'>
                    <div className='row align-items-center py-5'>
                        <div className='col-md-8 text-white'>
                            <h1>About Us</h1>
                            <p>
                                Georgi's T-shirt Shop was founded in January
                                2023 and is here to make revolution in the
                                industry. Our trademark is the good quality and
                                the style of our clothes. You can read more
                                about us{' '}
                                <a
                                    href='https://www.wikipedia.org'
                                    style={{ color: 'white' }}>
                                    here
                                </a>
                                .
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <img
                                src='assets/img/about-hero.svg'
                                alt='About Hero'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <OurServices />
            <OurBrands />
        </>
    );
};

export default About;
