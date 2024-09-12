import Image from "next/image";
import Navbar from "../../component/Navbar/Navbar.jsx";
import HomeComponent from "../../component/Home/Home.jsx"; // Renombrar el componente importado
import RestablecerUsuario from "../../component/Restablecer/RestablecerUsuario.jsx"

export default function Page() { // Cambia el nombre de la función exportada
  return (
    <main className="bg-white">
      <div className="flex justify-center items-center">
      <RestablecerUsuario/>
      </div>
    </main>
  );
}

