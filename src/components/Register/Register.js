import './Register.css';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

const Register = () => {
    const { signup, currentUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const submitHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let { email, password, confirmPassword, name } =
            Object.fromEntries(formData);

        // todo: navigate
        if (password !== confirmPassword)
            return setError('Passwords do not match!');

        try {
            setLoading(true);
            await signup(email, password);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    return (
        <>
            <h1>
                <b>Register</b>
            </h1>
            <br />
            <form onSubmit={submitHandler}>
                {currentUser?.email}
                {error && (
                    <div class='alert alert-danger' role='alert'>
                        {error}
                    </div>
                )}
                <div className='form-row'>
                    <div className='form-group'>
                        <label htmlFor='inputEmail4'>Email</label>
                        <input
                            name='email'
                            type='email'
                            className='form-control'
                            id='inputEmail4'
                            placeholder='Email'
                        />
                    </div>
                    <br />
                    <div className='form-group'>
                        <label htmlFor='inputPassword4'>Password</label>
                        <input
                            name='password'
                            type='password'
                            className='form-control'
                            id='inputPassword4'
                            placeholder='Password'
                        />
                    </div>
                    <br />
                    <div className='form-group'>
                        <label htmlFor='inputRepeatPassword4'>
                            Repeat Password
                        </label>
                        <input
                            name='confirmPassword'
                            type='password'
                            className='form-control'
                            id='inputRepeatPassword4'
                            placeholder='Password'
                        />
                    </div>
                </div>
                <br />
                <div className='form-group col-md-6'>
                    <label htmlFor='inputName'>Full Name</label>
                    <input
                        name='name'
                        type='text'
                        className='form-control'
                        id='inputName'
                        placeholder='Your name'
                    />
                </div>
                <br />
                <div className='form-group'>
                    <div className='form-check'>
                        <input
                            className='form-check-input'
                            type='checkbox'
                            id='gridCheck'
                        />
                        <label className='form-check-label' htmlFor='gridCheck'>
                            Remember me
                        </label>
                    </div>
                </div>
                {loading ? (
                    <image src='/assets/img/ajax-loader.gif' />
                ) : (
                    <button type='submit' className='btn btn-primary'>
                        Create account
                    </button>
                )}
            </form>
        </>
    );
};

export default Register;
