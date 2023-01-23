import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const { login, isAuthenticated } = useAuth();
    const [loading, setLoading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let { email, password } = Object.fromEntries(formData);

        try {
            setLoading(true);
            login(email, password).then(() => {
                navigate('/');
                setLoading(false);
            });
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                        Email address
                    </label>
                    <input
                        type='email'
                        name='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        placeholder='Your Email'
                    />
                    <br />
                </div>
                <div className='mb-3'>
                    <label
                        htmlFor='exampleInputPassword1'
                        className='form-label'>
                        Password
                    </label>
                    <input
                        name='password'
                        type='password'
                        className='form-control'
                        id='exampleInputPassword1'
                        placeholder='Your Password'
                    />
                </div>
                <br />
                {loading ? (
                    <div className='spinner-border text-success' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                ) : (
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                )}
            </form>
            <p>
                Don't have an account?{' '}
                <Link to='/register'>Register here!</Link>
            </p>
        </>
    );
};

export default Login;
