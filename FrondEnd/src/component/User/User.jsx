// Agrega 'use client' para marcar este componente como un componente cliente.
"use client";

import React from "react";
import { FaStar } from 'react-icons/fa'; // Importa el icono de estrella desde react-icons
import { useRouter } from 'next/navigation'; // Cambia a next/navigation
import Button from "../Button/Button";

export default function CustomCard({ persona }) {
  const router = useRouter(); // Usa el hook useRouter de next/navigation

  // Determina el color de la estrella y la pelota basado en el estado
  const estadoColor = persona.estado === "Activo" ? "bg-green-500" : "bg-gray-500";
  const estrellaColor = persona.favorito ? "text-yellow-500" : "text-gray-500";

  // Función para manejar el clic del botón y redirigir
  const handleConversar = () => {
    router.push('/Chat'); // Redirige a la página /Chat
  };

  return (
    <div className="relative w-[345px] h-[415px] rounded-3xl overflow-hidden bg-cover bg-center" 
      style={{ backgroundImage: `url(${persona.foto})` }}>

      {/* Estrella en la esquina superior derecha */}
      <div className={`absolute top-4 right-4 text-5xl z-20 ${estrellaColor}`}>
        <FaStar />
      </div>

      {/* Información de la persona sobre la imagen */}
      <div className="absolute bottom-16 left-6 w-[300px] h-[100px] bg-black bg-opacity-80 rounded-3xl text-white p-4 z-10">
        <div className="flex justify-between items-center">
          <div>
            <p>Nombre: {persona.nombre}</p>
            <p>Edad: {persona.edad} años</p>
            <p>Sexo: {persona.sexo}</p>
          </div>
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full ${estadoColor}`}
              aria-label={`Estado: ${persona.estado}`}
            />
          </div>
        </div>
      </div>

      {/* Botón en la parte inferior */}
      <div className="absolute bottom-0 left-0 w-full">
        <Button
          text="Conversar"
          type="submit"
          width="345px"
          height="48px"
          className="w-full"
          onClick={handleConversar} // Agrega el evento onClick para manejar la redirección
        />
      </div>
    </div>
  );
}
