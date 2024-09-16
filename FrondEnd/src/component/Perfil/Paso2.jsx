
"use client"
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import Button from '../Button/Button.jsx'
import { useRouter } from 'next/navigation';


export default function App({setstepForLogin, formData, setFormData}) {

    const router = useRouter();

    const handleAgeChange = (e) => {
        setFormData({ ...formData, ageRange: e.target.value });
      };

    return (
        <div>
            <div className="flex flex-row">

                <div className="flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
                    <img className="w-[528px] ml-20" alt="Logo" src="https://iili.io/dObKEfS.png" />
                </div>

                <div className="flex flex-col items-center justify-center p-6">
                    <h2 className=" text-3xl font-bold mb-4">¿En qué rango de edad te encuentas?</h2>
                    <a className="mb-20 text-xl ">Por favor, escoger una opción</a>

                    <div className="flex flex-col space-y-7">
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <label className="flex items-center">
                                <input type="radio" name="age" value="18-25" onChange={handleAgeChange} />
                                <span className="ml-2">De 18-25</span>
                            </label>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <label className="flex items-center">
                                <input type="radio" name="age" value="26-35" onChange={handleAgeChange} />
                                <span className="ml-2">De 25-35</span>
                            </label>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <label className="flex items-center">
                                <input type="radio" name="age" value="36-45" onChange={handleAgeChange}/>
                                <span className="ml-2">De 35-45</span>
                            </label>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <label className="flex items-center">
                                <input type="radio" name="age" value="46-60" onChange={handleAgeChange} />
                                <span className="ml-2">Más de 45</span>
                            </label>
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
                            onClick={()=>{setstepForLogin(3)}}
                        />

                    </div>
                </div>

            </div>
        </div>
    );
}

