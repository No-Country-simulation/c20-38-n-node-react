import Navbar from "../../component/Navbar/Navbar.jsx";
import Login from "../../component/Login/Login.jsx"
import Paso1 from "../../component/Perfil/Paso1.jsx"
import Paso2 from "../../component/Perfil/Paso2.jsx"
import Paso3 from "../../component/Perfil/Paso3.jsx"
import Paso4 from "../../component/Perfil/Paso4.jsx"

export default function Page() { // Cambia el nombre de la función exportada
  return (
    <main className="bg-white">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className=" flex flex-col">
          <Paso1 />
          <Paso2 />
          <Paso3 />
          <Paso4 />
        </div>
      </div>
    </main>
  );
}

