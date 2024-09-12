
"use client"
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import Button from '../Button/Button.jsx'
import { useRouter } from 'next/navigation';
import ButtonSecondary from "../Button/ButtonSecondary.jsx";


export default function App() {

    const router = useRouter();

    const handleClick = () => {
        router.push('/Users'); 
    };

    return (
        <div>
            <div className="flex flex-row">

                <div className="flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
                    <img className="w-[528px] ml-20" alt="Logo" src="https://iili.io/dObKmdX.png" />
                </div>

                <div className="flex flex-col items-center justify-center p-6">
                    <h2 className=" text-3xl font-bold mb-4">¿Cuál es tu objetivo de aprender?</h2>
                    <a className="mb-20 text-xl ">Puedes elegir varias opciones</a>

                    <div className="flex flex-col space-y-7 ">
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <a href="#" className="">Impulsar mis estudios, exámenes o cursos</a>
                            <input type="checkbox" />
                        </div>
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <a href="#" className="">Cultura, pasatiempos o para viajar</a>
                            <input type="checkbox" />
                        </div>
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <a href="#" className="">Impulsar mi carrera  profesional</a>
                            <input type="checkbox" />
                        </div>
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <a href="#" className="">Otros</a>
                            <input type="checkbox" />
                        </div>
                    </div>
                    <div className=" flex flex-col mt-20">

                        <div>
                            <Button
                                text='Continuar'
                                left='0' // Alinea el botón en el centro horizontalmente
                                top='auto' // Ajusta el top según sea necesario
                                type='submit'
                                width='464px'
                                height='56px'
                                className="mt-4" 
                                onClick={handleClick}
                            />

                        </div>
                        <div className="mt-10">
                            <ButtonSecondary
                                text='Saltar sin responder' left='10rem' top='88%' type='submit' width='464px' height='56px' borderColor='#FF6B6B' onClick={handleClick}
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

