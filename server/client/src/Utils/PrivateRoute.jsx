import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, children }) => {

    if (!isLoggedIn) {
        // Redirect to login if the user is not authenticated
        return <Navigate to='/' replace />;
    }

    // Render the children if the user is authenticated
    return children;
};

export default PrivateRoute;
