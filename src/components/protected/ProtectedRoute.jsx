

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth/AuthContext';

function ProtectedRoute({ children }) {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/accounts/authentification" />;
    }

    return children;
}   

export default ProtectedRoute;
