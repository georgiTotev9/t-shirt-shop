import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section style={{ height: '700px' }}>
            <h1>
                Not Found <span className='badge bg-secondary'>404</span>
            </h1>
            <div
                className='alert alert-danger'
                role='alert'
                style={{ width: '95%', margin: 'auto' }}>
                The page you are looking for does't exist or other error
                occurred.{' '}
                <Link to='/' className='alert-link'>
                    Go Back.
                </Link>
            </div>
            <img
                src='/assets/img/404.jpg'
                alt=''
                style={{ margin: 'auto', display: 'block' }}
            />
        </section>
    );
};

export default NotFound;
