import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <form>
                <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                        Email address
                    </label>
                    <input
                        type='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        placeholder='Your Email'
                    />
                    <br />
                </div>
                <div className='mb-3'>
                    <label htmlFor='exampleInputPassword1' className='form-label'>
                        Password
                    </label>
                    <input
                        type='password'
                        className='form-control'
                        id='exampleInputPassword1'
                        placeholder='Your Password'
                    />
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
            </form>
            <p>Don't have an account? <Link to='/register'>Register here!</Link></p>
        </>
    );
};

export default Login;
