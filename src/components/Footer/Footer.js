import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='bg-dark' id='tempaltemo_footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 pt-5'>
                        <h2 className='h2 text-success border-bottom pb-3 border-light logo'>
                            Georgi's Shop
                        </h2>
                        <ul className='list-unstyled text-light footer-link-list'>
                            <li>
                                <i className='fas fa-map-marker-alt fa-fw'>
                                    &nbsp;
                                </i>
                                123 Sofia, Bulgaria 10660
                            </li>
                            <li>
                                <i className='fa fa-phone fa-fw'>&nbsp;</i>
                                <span className='text-decoration-none'>
                                    +359 878 7878
                                </span>
                            </li>
                            <li>
                                <i className='fa fa-envelope fa-fw'>&nbsp;</i>
                                <span className='text-decoration-none'>
                                    georgidimovtotev1@gmail.com
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className='col-md-4 pt-5'>
                        <h2 className='h2 text-light border-bottom pb-3 border-light'>
                            T-shirts
                        </h2>
                        <ul className='list-unstyled text-light footer-link-list'>
                            <li>
                                <Link className='text-decoration-none' to='#'>
                                    Sport T-shirts
                                </Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none' to='#'>
                                    Men's T-shirts
                                </Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none' to='#'>
                                    Women's T-shirts
                                </Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none' to='#'>
                                    Merchandise T-shirt
                                </Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none' to='#'>
                                    Most popular
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='col-md-4 pt-5'>
                        <h2 className='h2 text-light border-bottom pb-3 border-light'>
                            Further Info
                        </h2>
                        <ul className='list-unstyled text-light footer-link-list'>
                            <li>
                                <Link className='text-decoration-none' to='/'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none' to='/about'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <span className='text-decoration-none'>
                                    Shop Locations
                                </span>
                            </li>
                            <li>
                                <span className='text-decoration-none'>
                                    FAQs
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='row text-light mb-4'>
                    <div className='col-12 mb-3'>
                        <div className='w-100 my-3 border-top border-light'></div>
                    </div>
                    <div className='col-auto me-auto'>
                        <ul className='list-inline text-left footer-icons'>
                            <li className='list-inline-item border border-light rounded-circle text-center'>
                                <a
                                    className='text-light text-decoration-none'
                                    target='_blank'
                                    href='http://facebook.com/'>
                                    <i className='fab fa-facebook-f fa-lg fa-fw'></i>
                                </a>
                            </li>
                            <li className='list-inline-item border border-light rounded-circle text-center'>
                                <a
                                    className='text-light text-decoration-none'
                                    target='_blank'
                                    href='https://www.instagram.com/'>
                                    <i className='fab fa-instagram fa-lg fa-fw'></i>
                                </a>
                            </li>
                            <li className='list-inline-item border border-light rounded-circle text-center'>
                                <a
                                    className='text-light text-decoration-none'
                                    target='_blank'
                                    href='https://twitter.com/'>
                                    <i className='fab fa-twitter fa-lg fa-fw'></i>
                                </a>
                            </li>
                            <li className='list-inline-item border border-light rounded-circle text-center'>
                                <a
                                    className='text-light text-decoration-none'
                                    target='_blank'
                                    href='https://www.linkedin.com/'>
                                    <i className='fab fa-linkedin fa-lg fa-fw'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='w-100 bg-black py-3'>
                <div className='container'>
                    <div className='row pt-2'>
                        <div className='col-12'>
                            <p className='text-left text-light'>
                                Copyright &copy; 2023 Georgi's shop
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
