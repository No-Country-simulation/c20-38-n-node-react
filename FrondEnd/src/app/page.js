import Image from "next/image";
import Navbar from "../component/Navbar/Navbar.jsx";
import HomeComponent from "../component/Home/Home.jsx"; // Renombrar el componente importado
import Footer from "../component/Footer/Footer.jsx"

export default function Page() { // Cambia el nombre de la función exportada
  return (
    <main className="bg-white">
      <div className="flex justify-center items-center">
      <HomeComponent />
      </div>
    </main>
  );
}

