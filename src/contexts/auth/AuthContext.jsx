

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../../config/FireBase';
import { onAuthStateChanged, getRedirectResult } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const codeVerifier = localStorage.getItem('code_verifier');
    if (codeVerifier) {
      getRedirectResult(auth)
        .then((result) => {
          localStorage.removeItem('code_verifier');
          if (result?.user) {
            setCurrentUser(result.user);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    } else {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
      });
      return unsubscribe;
    }
  }, []);

  const value = {
    currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
