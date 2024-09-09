"use client"
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import Button from '../Button/Button.jsx'
import { useRouter } from 'next/navigation';


export default function App() {

        const router = useRouter();
      
        const handleClick = () => {
          router.push('/Login'); // Redirige a la página de login
        };

    return (
        <div>
            <div className="w-full mb-20 flex flex-col items-center ">
                {/* Primer div: Contenido principal */}
                <div className="flex w-[80%] max-w-screen-lg max-h-96 mb-8">
                    <div className="flex-1 flex flex-col items-center p-8 pt-20">
                        <a href="" className="mb-4 text-lg font-semibold text-center w-full max-w-[250px]">
                            Aprende un idioma y haz amigos donde quieras
                        </a>
                        <a href="" className="mb-4 text-lg text-center w-full max-w-[400px]">
                            Conectar con personas nativas nunca fue tan sencillo y divertido
                        </a>
                        <Button
                            onClick={handleClick}
                            text='Aprende gratis'
                            left='0' // Alinea el botón en el centro horizontalmente
                            top='auto' // Ajusta el top según sea necesario
                            type='submit'
                            width='253px'
                            height='56px'
                            className="mt-4" // Añade un margen superior si es necesario
                        />
                    </div>
                    <div className="w-[65%]  p-8">
                        <img className="w-[756px]" alt="Logo" src="https://iili.io/dwYE7lS.png" />
                    </div>
                </div>
                <div className="mb-4 pt-20">
                    <a href="" className="text-lg font-semibold ">Quiero aprender</a>
                </div>
                <div className="flex flex-row">
                    <img className="w-[54px] ml-20" alt="Logo" src="https://iili.io/dNdx99V.png" />
                    <img className="w-[54px] ml-20" alt="Logo" src="https://iili.io/dNdq9lp.png" />
                    <img className="w-[54px] ml-20" alt="Logo" src="https://iili.io/dNdq2Rt.png" />
                    <img className="w-[54px] ml-20" alt="Logo" src="https://iili.io/dNdqHUN.png" />
                    <img className="w-[54px] ml-20" alt="Logo" src="https://iili.io/dNdqdJI.png" />
                    <img className="w-[54px] ml-20" alt="Logo" src="https://iili.io/dNdfyfR.png" />
                    <img className="w-[54px] ml-20" alt="Logo" src="https://iili.io/dNdop8Q.png" />
                </div>
            </div>
            <div className="flex justify-center items-start w-full ">
                <div className="flex-1 p-4 rounded-md ">
                    <h2 className="text-xl font-semibold mb-2">
                        <a href="#" className="ml-20">¿Quiénes somos?</a>
                    </h2>
                    <p className="ml-20 mt-10 mb-4 w-[380px]">
                        Nos dedicamos a conectar con personas de todo el mundo para que aprendan y practiquen idiomas de manera auténtica y efectiva. Creemos que el intercambio cultural y la comunicación global son fundamentales para el crecimiento personal y profesional, y estamos aquí para hacer que ese proceso sea sencillo y divertido.
                    </p>
                    <img className="w-full max-w-md mx-auto" alt="Logo" src="https://iili.io/dNdhs2f.png" />
                </div>

                <div className="flex-1  p-4 rounded-md  pb-[86px]">
                    <img className="w-full max-w-md mx-auto" alt="Logo" src="https://iili.io/dNdhPrG.png" />

                    <h2 className="text-xl font-semibold mb-2">
                        <a href="#" className="ml-20">Nuestra misión</a>
                    </h2>
                    <p className="
                     ml-20 mt-10 mb-4 w-[380px]">
                        Ofrecer una plataforma dinámica y accesible que permita a los usuarios intercambiar habilidades lingüísticas y culturales, facilitando así el aprendizaje mutuo en un entorno enriquecedor.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="align-text-top">Preguntas Frecuentes</h2>
            
            </div>

        </div>
    );
}

