// context/AuthContext.js
'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [userName, setUserName] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      fetchUserName(token);
    }
  }, []);

  const fetchUserName = async (token) => {
    try {
      const response = await fetch(`https://inative-back.onrender.com/getUserByToken/${token}`);
      if (response.ok) {
        const data = await response.json();
        setUserName(data.userToken.user_name);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    fetchUserName(token);
    router.push('/Perfil'); // Redirige a la página de perfil
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUserName(null);
    router.push('/Login'); // Redirige a la página de login
  };

  return (
    <AuthContext.Provider value={{ userName, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
