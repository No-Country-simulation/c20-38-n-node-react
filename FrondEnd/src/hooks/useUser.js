// src/hooks/useUser.js

import { useState, useEffect } from 'react';

export const useUser = () => {
    const [userData, setUserData] = useState(null); // Estado para los datos del usuario
    const [token, setToken] = useState(null);

    useEffect(() => {
        // Recupera el token del localStorage solo en el cliente
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);

        if (storedToken) {
            const fetchUserData = async () => {
                try {
                    const response = await fetch(`https://inative-back.onrender.com/getUserByToken/${storedToken}`);
                    if (response.ok) {
                        const data = await response.json();
                        setUserData(data.userToken); // Guarda los datos del usuario en el estado
                    } else {
                        console.error("Error fetching user data");
                    }
                } catch (error) {
                    console.error("Error:", error);
                }
            };

            fetchUserData();
        }
    }, []);

    return { userData, token }; // Devuelve todos los datos del usuario y el token
};
