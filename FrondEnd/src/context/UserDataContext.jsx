'use client'
import { createContext, useState, useContext } from 'react';

// Crear el contexto
const UserDataContext = createContext();

// Proveedor del contexto para envolver la app
export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    user_name: '',
    full_name: '',
    email: '',
    english_level: '',
    range_age: '',
    gender: '',
    objetives: []
  });

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

// Hook para acceder al contexto
export const useUserData = () => useContext(UserDataContext);
