import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details';
import ShoppingCart from './components/ShoppingCart';
import NotFound from './components/Common/NotFound';
import ErrorBoundary from './components/Common/ErrorBoundary';
import { AuthProvider } from './contexts/AuthContext';

import './App.css';

function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <div id='container'>
                    <Header />
                    <main id='site-content'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/shop-catalog' element={<Catalog />} />
                            <Route path='/details/:productId' element={<Details />} />
                            <Route path='/shopping-cart' element={<ShoppingCart />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </AuthProvider>
        </ErrorBoundary>
    );
}

export default App;
