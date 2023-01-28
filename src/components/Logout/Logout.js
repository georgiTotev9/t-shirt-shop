import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';

const Logout = () => {
    const { logout } = useAuth();

    useEffect(() => {
        (async () => {
            await logout();
        })();
    }, [logout]);

    return <Navigate to='/' replace={true} />;
};

export default Logout;
