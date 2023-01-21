import { Routes, Route } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

firebase.initializeApp({
    apiKey: 'AIzaSyDVcXqguHKOp3T4ggfLDAyvx3BT0yyiv5k',
    authDomain: 't-shirt-shop-67b49.firebaseapp.com',
    projectId: 't-shirt-shop-67b49',
    storageBucket: 't-shirt-shop-67b49.appspot.com',
    messagingSenderId: '673746981274',
    appId: '1:673746981274:web:039c8a235ad7affe99aa23',
    measurementId: 'G-Q1XR2LFB3Y',
});

function App() {
    return (
        <div id='container'>
            <Header />
            <main id='site-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
