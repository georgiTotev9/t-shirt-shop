import { db } from '../firebase';
import { collection, doc, getDoc, getDocs, query, where,  } from 'firebase/firestore';

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

// TODO: finish getTree and use it at home page
export const getThree = async () => {
    // const q = query(collection(db, "t-shirt-items"), where(firestore.FieldPath.documentId(), "==", true));
}