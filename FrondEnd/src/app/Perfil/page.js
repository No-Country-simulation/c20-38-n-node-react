'use client'
import Navbar from "../../component/Navbar/Navbar.jsx";
import Login from "../../component/Login/Login.jsx"
import Paso1 from "../../component/Perfil/Paso1.jsx"
import Paso2 from "../../component/Perfil/Paso2.jsx"
import Paso3 from "../../component/Perfil/Paso3.jsx"
import Paso4 from "../../component/Perfil/Paso4.jsx"
import { useState } from "react";

export default function Page() { // Cambia el nombre de la función exportada

  const [stepForLogin, setstepForLogin] = useState(1)


  return (
    <main className="bg-white">
      <div className="flex justify-center items-center">
        <div className=" flex flex-col">
          {stepForLogin === 1 && <Paso1 setstepForLogin={setstepForLogin}/>}
          {stepForLogin === 2 && <Paso2 setstepForLogin={setstepForLogin}/>}
          {stepForLogin === 3 && <Paso3 setstepForLogin={setstepForLogin}/>}
          {stepForLogin === 4 && <Paso4 setstepForLogin={setstepForLogin}/>}
        </div>
      </div>
    </main>
  );
}

