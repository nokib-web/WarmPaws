import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading/LoadingSpinner';
import { AuthContext } from './AuthContext';


const PrivateRoutes = ({ children }) => {
    const { user, loading } = use(AuthContext);

    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <Loading></Loading>
    }

    if (user && user?.email) {
        return children;

    }
    return <Navigate state={location.pathname} to='/login'></Navigate>


};

export default PrivateRoutes;