
import './Home.css';

import UserForm from '../../Components/Home/UserFrom/UserForm';
import Navbar from '../../Components/Home/Navbar/Navbar';
import { useAuth } from '../../Utils/auth';
import { Navigate } from 'react-router-dom';


const Home = () => {

    const { isLoggedIn } = useAuth();

    if (isLoggedIn) {
        return <Navigate to='admin/user/dashboard' />
    }

    return (
        <>
            <Navbar />
            <UserForm />
        </>
    );
};

export default Home;
