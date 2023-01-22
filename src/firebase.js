import { initializeApp } from 'firebase/app';
import { getFireStore } from '@firebase/firestore';
import 'firebase/auth';

// this should be private for security reasons
const firebaseConfig = {
    apiKey: 'AIzaSyDVcXqguHKOp3T4ggfLDAyvx3BT0yyiv5k',
    authDomain: 't-shirt-shop-67b49.firebaseapp.com',
    projectId: 't-shirt-shop-67b49',
    storageBucket: 't-shirt-shop-67b49.appspot.com',
    messagingSenderId: '673746981274',
    appId: '1:673746981274:web:039c8a235ad7affe99aa23',
    measurementId: 'G-Q1XR2LFB3Y',
};

export const app = initializeApp(firebaseConfig);

export const db = getFireStore(app);

export const auth = app.auth();
