import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth';

const AdminProtect = ({ children }) => {

    const { user } = useAuth({});

    // console.log(user.isAdmin);    

    if (user.isAdmin === undefined) {
        return <h1>Loading...</h1>
    }

    if (!user.isAdmin) {
        // Redirect to login if the user is not authenticated
        // console.log(user.isAdmin);
        return <Navigate to='/admin/user' replace />;
    }

    // console.log(user.isAdmin);

    // Render the children if the user is authenticated
    return children;
};

export default AdminProtect;
