import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} =useContext(AuthContext)

    if(loading){
        return <div class="spinner-border text-success position-fixed top-50 start-50 translate-middle" role="status"></div>
    }

    const location= useLocation()

    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}}></Navigate>
};

export default PrivateRoute;
