import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Logout = () => {
    const { logout } = useAuth();
    (async () => {
        await logout();
    })();

    return <Navigate to='/' replace={true} />;
};

export default Logout;
