import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import Button from '../Button/Button.jsx'




export default function App() {
    return (
        <div>

<div className="flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
    <div className="flex flex-col items-center w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Restablecer Contraseña</h2>
        <p className="mb-10 text-center w-[350px]">
            Te enviaremos a tu email instrucciones para que puedas restablecer tu contraseña
        </p>
        <div className="flex flex-col w-full">
            <label className="text-start mb-2">Contraseña</label>
            <input 
                type="text" 
                className="border-b-2 border-gray-300 bg-transparent placeholder-gray-500 focus:border-blue-500 focus:outline-none mb-4"
            />
            <Button 
                text='Enviar' 
                type='submit' 
                width='385px' 
                height='56px'
                className="mt-4" // Añade margen superior si es necesario
            />
        </div>
    </div>
</div>



        </div>

    );
}