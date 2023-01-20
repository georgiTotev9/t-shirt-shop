import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
    return (
        <div id='container'>
            <Header />
            <main id='site-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
