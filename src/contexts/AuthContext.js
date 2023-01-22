import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChange((user) => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = { currentUser, signup };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
