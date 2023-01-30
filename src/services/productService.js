import { db } from '../firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

export const getAll = async () => {
    const productCollection = collection(db, 't-shirt-items');
    const productsSnapshot = await getDocs(productCollection);

    return productsSnapshot;
};

export const getOne = async (id) => {
    const productRef = doc(db, 't-shirt-items', id);
    const productSnapshot = await getDoc(productRef);

    return productSnapshot;
};
