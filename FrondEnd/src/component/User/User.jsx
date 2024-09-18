"use client";

import React, { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa'; // Importa el icono de estrella desde react-icons
import { useRouter } from 'next/navigation'; // Cambia a next/navigation
import Button from "../Button/Button";
import { calcularEdad } from "../../utils/getAge.js"
import { constrainedMemory } from "process";


export default function CustomCard({ persona ,ownDataUser}) { // Recibe también el usuario actual
  const router = useRouter(); // Usa el hook useRouter de next/navigation
  const age = calcularEdad(persona.dt_birthdate)

  const estadoColor = persona.status === "connected" ? "bg-green-500" : "bg-gray-500";
  const estrellaColor = persona.role === "admin" ? "text-yellow-500" : "text-gray-500";
  const Masculino = persona.gender === "Male" ? "Masculino" : "Femenino"
  const handleConversar = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch("https://inative-back.onrender.com/createChat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id_user_1: ownDataUser.userToken.id_user, // Usuario actual
          id_user_2: persona.id_user, // Persona con la que se quiere chatear
        }),
      });

      if (!response.ok) {
        throw new Error("Error al crear el chat");
      }

      const result = await response.json();

      // Redirigir al chat
      router.push('/Chat');
    } catch (error) {
      console.error("Error al iniciar conversación:", error);
    }
  };


console.log(persona);

  return (
    <div className="relative w-[345px] h-[415px] rounded-3xl overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${persona.avatar})` }}>

      {/* Estrella en la esquina superior derecha */}
      <div className={`absolute top-4 right-4 text-5xl z-20 ${estrellaColor}`}>
        <FaStar />
      </div>

      {/* Información de la persona sobre la imagen */}
      <div className="absolute bottom-16 left-6 w-[300px] h-[100px] bg-black bg-opacity-80 rounded-3xl text-white p-4 z-10">
        <div className="flex justify-between items-center">
          <div>
            <p>Nombre: {persona.user_name}</p>
            <p>Edad: {age} años</p>
            <p>Sexo: {Masculino}</p>
          </div>
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full ${estadoColor}`}
              aria-label={`Estado: ${persona.status}`}
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
