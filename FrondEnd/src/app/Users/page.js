
import Image from "next/image";
import Navbar from "../../component/Navbar/Navbar.jsx";
import Users from "../../container/Users/Users.jsx"; // Renombrar el componente importado
import Footer from "../../component/Footer/Footer.jsx"

export default function Page() { // Cambia el nombre de la función exportada
  return (
    <main className="bg-white">
      <div className="flex justify-center items-center">
      <Users/>
      </div>
    </main>
  );
}

