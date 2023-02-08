import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const getCart = async () => {
    const cartCollection = collection(db, 'shopping-cart');
    const cartSnapshot = await getDocs(cartCollection);

    return cartSnapshot;
};
