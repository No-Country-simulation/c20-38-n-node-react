import Navbar from "../../component/Navbar/Navbar.jsx";
import Login from "../../component/Login/Login.jsx"


export default function Page() { // Cambia el nombre de la función exportada
  return (
    <main className="bg-white">
      <div className="flex justify-center items-center">
      <Login/>
      </div>
    </main>
  );
}

