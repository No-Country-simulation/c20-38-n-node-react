"use client"
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Button from '../Button/Button.jsx'
import ButtonSecondary from "../Button/ButtonSecondary.jsx";

export default function App({ formData, setFormData ,handleSubmit }) {
    const router = useRouter();

    const handleObjectivesChange = (e) => {
        setFormData({ ...formData, objectives: e.target.value });
      };

    return (
        <div>
            <div className="flex flex-row">
                <div className="flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
                    <img className="w-[528px] ml-20" alt="Logo" src="https://iili.io/dObKmdX.png" />
                </div>

                <div className="flex flex-col items-center justify-center p-6">
                    <h2 className="text-3xl font-bold mb-4">¿Cuál es tu objetivo de aprender?</h2>
                    <p className="mb-20 text-xl">Puedes elegir varias opciones</p>

                    <div className="flex flex-col space-y-7">
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <label className="flex items-center">
                                <input type="checkbox" value="Study" onChange={handleObjectivesChange} />
                                <span className="ml-2">Impulsar mis estudios, exámenes o cursos</span>
                            </label>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <label className="flex items-center">
                                <input type="checkbox" value="Hobby" onChange={handleObjectivesChange} />
                                <span className="ml-2">Cultura, pasatiempos o para viajar</span>
                            </label>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <label className="flex items-center">
                                <input type="checkbox" value="Professional" onChange={handleObjectivesChange} />
                                <span className="ml-2">Impulsar mi carrera profesional</span>
                            </label>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[460px]">
                            <label className="flex items-center">
                                <input type="checkbox" value="Other" onChange={handleObjectivesChange} />
                                <span className="ml-2">Otros</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col mt-20">
                        <div>
                            <Button
                                text='Continuar'
                                left='0'
                                top='auto'
                                type='submit'
                                width='464px'
                                height='56px'
                                className="mt-4"
                                onClick={handleSubmit}
                            />
                        </div>
                        <div className="mt-10">
                            <ButtonSecondary
                                text='Saltar sin responder'
                                left='10rem'
                                top='88%'
                                type='submit'
                                width='464px'
                                height='56px'
                                borderColor='#FF6B6B'
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
