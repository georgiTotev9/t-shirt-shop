import { db } from '../firebase';
import {
    collection,
    getDocs,
    doc,
    deleteDoc,
    addDoc,
} from 'firebase/firestore';

export const getCart = async () => {
    const cartCollection = collection(db, 'shopping-cart');
    const cartSnapshot = await getDocs(cartCollection);

    return cartSnapshot;
};

export const deleteCartProduct = async (id) => {
    return await deleteDoc(doc(db, 'shopping-cart', id));
};

export const addCartProduct = async (data) => {
    return await addDoc(collection(db, 'shopping-cart'), data);
};
