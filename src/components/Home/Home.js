import Carousel from './Carousel';
import MostPopular from './MostPopular';
import { getThree } from '../../services/productService';

const Home = () => {
    return (
        <section>
            <Carousel />
            <MostPopular />
        </section>
    );
};

export default Home;
