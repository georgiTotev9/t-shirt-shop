import { getThree } from '../../../services/productService';
import Card from './Card';
import { useEffect, useState } from 'react';

const MostPopular = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getThree().then((res) => setProducts(res));
    }, []);

    return (
        <section className='bg-light'>
            <div className='container py-5'>
                <div className='row text-center py-3'>
                    <div className='col-lg-6 m-auto'>
                        <h1 className='h1'>Most Popular</h1>
                        <p>Our best seller t-shirts!</p>
                    </div>
                </div>
                <div className='row'>
                    {products.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MostPopular;
