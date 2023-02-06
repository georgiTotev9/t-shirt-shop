import './Header.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import ConfirmDialog from '../Common/ConfirmDialog';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const [showDialog, setShowDialog] = useState(false);

    const logoutClickHandler = (e) => {
        e.preventDefault();
        setShowDialog(true);
    };
    
    const logoutHandler = async (e) => {
        e.preventDefault();
        await logout();
        setShowDialog(false);
    };

    const guestNav = (
        <>
            <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                    Login
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                    Register
                </Link>
            </li>
        </>
    );

    const userNav = (
        <li className='nav-item'>
            <a className='nav-link' href='#' onClick={logoutClickHandler}>
                Logout
            </a>
        </li>
    );

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light shadow'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <Link
                        to='/'
                        className='navbar-brand text-success logo h1 align-self-center'>
                        Georgi's Shop
                    </Link>

                    <button
                        className='navbar-toggler border-0'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#templatemo_main_nav'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div
                        className='align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between'
                        id='templatemo_main_nav'>
                        <div className='flex-fill'>
                            <ul className='nav navbar-nav d-flex justify-content-between mx-lg-auto'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/'>
                                        Home
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/about'>
                                        About
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link
                                        className='nav-link'
                                        to='/shop-catalog'>
                                        Shop
                                    </Link>
                                </li>

                                {isAuthenticated ? userNav : guestNav}
                            </ul>
                        </div>
                        <div className='navbar align-self-center d-flex'>
                            <div className='d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3'>
                                <div className='input-group'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='inputMobileSearch'
                                        placeholder='Search ...'
                                    />
                                    <div className='input-group-text'>
                                        <i className='fa fa-fw fa-search'></i>
                                    </div>
                                </div>
                            </div>
                            <a
                                className='nav-icon d-none d-lg-inline'
                                href='#'
                                data-bs-toggle='modal'
                                data-bs-target='#templatemo_search'>
                                <i className='fa fa-fw fa-search text-dark mr-2'></i>
                            </a>
                            <Link
                                className='nav-icon position-relative text-decoration-none'
                                to='/cart'>
                                <i className='fa fa-fw fa-cart-arrow-down text-dark mr-1'></i>
                                <span className='position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark'></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <ConfirmDialog
                show={showDialog}
                onClose={() => setShowDialog(false)}
                onConfirm={logoutHandler}
            />
        </>
    );
};

export default Header;
