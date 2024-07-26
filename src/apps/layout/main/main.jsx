
import React from 'react';
import { useAuth } from '../../../contexts/auth/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../config/FireBase';
import { Components } from '../../../components';

function Main() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/accounts/authentification');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
    if(!currentUser) {
        return <Navigate to={"/accounts/authentification"}/>
    }

    return (
        <Components.Container>
            <button onClick={handleLogout}>
                Logout
            </button>
        </Components.Container>
    );
}

export default Main;
