import React from "react";
import User from "../../component/User/User.jsx"; // Ajusta la ruta según sea necesario
import personas from "../../component/User/personas.json"; // Ajusta la ruta según sea necesario

export default function App() {
    return (


        <div>
            <div className="flex justify-center
            mt-10 mb-10">
                <a href="" className=" text-3xl font-semibold text-center w-[400px] ">Elige tu persona nativa para conectar y aprender</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 p-6">
                {personas.map((persona, index) => (
                    <User key={index} persona={persona} />
                ))}
            </div>
        </div>
    );
}

