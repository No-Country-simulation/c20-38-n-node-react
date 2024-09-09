
"use client"
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import Button from '../Button/Button.jsx'
import { useRouter } from 'next/navigation';


export default function App() {

    return (
        <div>
            <div className="flex flex-row">

                <div className="flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
                    <img className="w-[528px] ml-20" alt="Logo" src="https://iili.io/dObKG07.png" />
                </div>

                <div className="flex flex-col items-center justify-center p-6">
                    <h2 className=" text-3xl font-bold mb-4">¿Qué nivel consideras que tienes?</h2>
                    <a className="mb-20 text-xl ">Por favor, escoger una opción</a>

                    <div className="flex flex-col space-y-7 ">
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <a href="#" className="">Soy principiante</a>
                            <input type="checkbox" />
                        </div>
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <a href="#" className="">Conozco lo básico, entiendo algo</a>
                            <input type="checkbox" />
                        </div>
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <a href="#" className="">Nivel avanzado, puedo conversar</a>
                            <input type="checkbox" />
                        </div>
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <a href="#" className="">Aún no lo sé</a>
                            <input type="checkbox" />
                        </div>
                    </div>
                    <div className="mt-20">

                        <Button
                            text='Continuar'
                            left='0' // Alinea el botón en el centro horizontalmente
                            top='auto' // Ajusta el top según sea necesario
                            type='submit'
                            width='464px'
                            height='56px'
                            className="mt-4" // Añade un margen superior si es necesario 
                        />

                    </div>
                </div>

            </div>
        </div>
    );
}

