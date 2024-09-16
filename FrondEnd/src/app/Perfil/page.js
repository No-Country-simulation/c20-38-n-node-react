'use client';
import { useState } from "react";
import Paso1 from "../../component/Perfil/Paso1.jsx";
import Paso2 from "../../component/Perfil/Paso2.jsx";
import Paso3 from "../../component/Perfil/Paso3.jsx";
import Paso4 from "../../component/Perfil/Paso4.jsx";
import { useRouter } from 'next/navigation';
import { useUser } from '../../hooks/useUser';

export default function Page() {
  const router = useRouter();
  const { userData, token } = useUser();

  const [stepForLogin, setstepForLogin] = useState(1);
  // const [english_level, setenglish_level] = useState("");
  // const [range_age, setrange_age] = useState("");
  // const [gender, setgender] = useState("");
  
  // Recoger la información de los pasos
  const [formData, setFormData] = useState({
    english_level: "",
    range_age: "",
    gender: "",
    objetives: ""
  });

  // Función para manejar el envío del formulario
  const handleSubmit = async () => {
   const token = localStorage.getItem("token");

    const data = {
      english_level: formData.level,
      range_age: formData.ageRange,
      gender: formData.gender,
      objetives: formData.objectives
    };

    try {
      const response = await fetch(`https://inative-back.onrender.com/uploadUser/${userData.id_user}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Error al actualizar la información del usuario.");
      }

      const result = await response.json();
      console.log("Actualización exitosa:", result);
      router.push('/Users');
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="bg-white">
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          {stepForLogin === 1 && <Paso1 setstepForLogin={setstepForLogin} formData={formData} setFormData={setFormData} />}
          {stepForLogin === 2 && <Paso2 setstepForLogin={setstepForLogin} formData={formData} setFormData={setFormData} />}
          {stepForLogin === 3 && <Paso3 setstepForLogin={setstepForLogin} formData={formData} setFormData={setFormData} />}
          {stepForLogin === 4 && <Paso4 handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />}
        </div>
      </div>
    </main>
  );
}
