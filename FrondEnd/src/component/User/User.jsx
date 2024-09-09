import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { FaStar } from 'react-icons/fa'; // Importa el icono de estrella desde react-icons
import Button from "../Button/Button";

export default function CustomCard({ persona }) {
  // Determina el color de la estrella y la pelota basado en el estado
  const estadoColor = persona.estado === "Activo" ? "bg-green-500" : "bg-gray-500";
  const estrellaColor = persona.favorito ? "text-yellow-500" : "text-gray-500";

  return (
    <div className="relative h-[485px] w-[345px]">
      <Card isFooterBlurred radius="lg" className="border-none h-[415px] w-full relative">
        <Image
          alt={`Foto de ${persona.nombre}`}
          src={persona.foto}
          height={415}
          className="object-cover"
        />
        {/* Estrella en la esquina superior derecha */}
        <div className={`absolute top-2 right-2 text-5xl z-20 ${estrellaColor}`}>
          <FaStar />
        </div>
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-16 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <div className="flex flex-col h-[80px] w-[287px] p-1">
            <div>
              <p className="text-white">Nombre: {persona.nombre}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-white">Edad: {persona.edad} años</p>
              <p className="text-white">Sexo: {persona.sexo}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full ${estadoColor} mr-2`}
              aria-label={`Estado: ${persona.estado}`}
            />
          </div>
        </CardFooter>
          <div className="">
            <Button
              text='Continuar'
              type='submit'
              width='full' // Asegúrate de que el botón ocupe el ancho completo
              height='56px'
              className="mt-4"
            />
          </div>
      </Card>
      {/* Botón debajo del Card */}
    </div>
  );
}
