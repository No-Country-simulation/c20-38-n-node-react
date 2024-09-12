"use client";
import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import ButtonSecondary from "../Button/ButtonSecondary.jsx";
import { useRouter } from 'next/navigation';

export default function App() {
  const router = useRouter();
  const [userName, setUserName] = useState(null); // Estado para el nombre del usuario

  // Función para obtener el nombre del usuario usando el token
  useEffect(() => {
    const fetchUserName = async () => {
      const token = localStorage.getItem('token'); // Recupera el token del localStorage
      if (token) {
        try {
          const response = await fetch(`https://inative-back.onrender.com/getUserByToken/${token}`);
          if (response.ok) {
            const data = await response.json();
            console.log(data.userToken.user_name);
            setUserName(data.userToken.user_name); // Guarda el nombre de usuario en el estado
          } else {
            console.error("Error fetching user data");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    fetchUserName(); // Ejecuta la función al montar el componente
  }, []);


  return (
    <Navbar>
      <Button>
        <NavbarBrand>
          <img href="/" className="w-20" alt="Logo" src="https://iili.io/dj8KH0X.png" />
        </NavbarBrand>
      </Button>
      <div className="flex-grow" />
      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        <NavbarItem>
          <Link color="foreground" href="/Perfil">
            {userName ? `Hola ${userName}` : "Cargando..."} {/* Muestra el nombre del usuario o un mensaje de carga */}
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
