import './Register.css';

const Register = () => {
    return (
        <>
            <h1>
                <b>Register</b>
            </h1>
            <form>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label for='inputEmail4'>Email</label>
                        <input
                            type='email'
                            className='form-control'
                            id='inputEmail4'
                            placeholder='Email'
                        />
                    </div>
                    <br />
                    <div className='form-group col-md-6'>
                        <label for='inputPassword4'>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            id='inputPassword4'
                            placeholder='Password'
                        />
                    </div>
                </div>
                <br />
                <div className='form-group'>
                    <label for='inputAddress'>Full Name</label>
                    <input
                        type='text'
                        className='form-control'
                        id='inputAddress'
                        placeholder='Your name'
                    />
                </div>
                <br />
                <div className='form-group'>
                    <label for='inputAddress2'>Address</label>
                    <input
                        type='text'
                        className='form-control'
                        id='inputAddress2'
                        placeholder='Apartment, studio, or floor'
                    />
                </div>
                <br />
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label for='inputCity'>City</label>
                        <input
                            type='text'
                            className='form-control'
                            id='inputCity'
                        />
                    </div>
                    <br />
                    <div className='form-group col-md-2'>
                        <label for='inputZip'>Zip</label>
                        <input
                            type='text'
                            className='form-control'
                            id='inputZip'
                        />
                    </div>
                </div>
                <br />
                <div className='form-group'>
                    <div className='form-check'>
                        <input
                            className='form-check-input'
                            type='checkbox'
                            id='gridCheck'
                        />
                        <label className='form-check-label' for='gridCheck'>
                            Remember me
                        </label>
                    </div>
                </div>
               
                <button type='submit' className='btn btn-primary'>
                    Create account
                </button>
            </form>
        </>
    );
};

export default Register;
