"use client"; // Asegúrate de que esta línea esté en la parte superior del archivo

import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "../Button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Inicializa el router

  // Función para manejar el login
  const handleLogin = async () => {
    try {
      const response = await fetch("https://inative-back.onrender.com/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Verifica si la respuesta fue exitosa
      if (response.ok) {
        const data = await response.json();
        console.log("Respuesta de la API:", data); // Imprime la respuesta para depuración

        const token = data.token;

        // Verifica si el token existe
        if (token) {
          // Guarda el token en el localStorage
          localStorage.setItem("token", token);
          alert("Inicio de sesión exitoso");

          // Redirige al home
          router.push("/Perfil");
        } else {
          alert("Token no recibido");
        }
      } else {
        alert("Error en el inicio de sesión");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="w-custom-width flex">
      <div className="w-[60%] h-[800px] ml-24">
        <div className="flex justify-center items-center">
          <img className="w-40" alt="Logo" src="https://iili.io/dj8KH0X.png" />
        </div>
        <div className="flex justify-center items-center text-3xl font-bold">
          <a className="w-[400px] text-center">
            ¡Disfruta y conecta con personas nativas como tú!
          </a>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-[740px] h-[508]"
            alt="Logo"
            src="https://iili.io/dj8bpJp.png"
          />
        </div>
      </div>
      <div className="w-[40%] mr-24">
        <div>
          <div className="flex ml-40 mt-10 mb-10">
            <a className="text-3xl font-bold">Regístrate</a>
          </div>
          <div className="flex-col pl-28 justify-center items-center">
            <div className="flex pb-3 w-auto">
              <button className="flex w-64 items-center border rounded-3xl bg-custom-gray">
                <div className="flex m-2">
                  <img
                    className="h-7 mr-5"
                    src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                    alt="google"
                  />
                  <span>Continuar con Google</span>
                </div>
              </button>
            </div>
            <div className="flex pb-3 w-auto">
              <button className="flex w-64 items-center border rounded-3xl bg-custom-gray">
                <div className="flex m-2">
                  <img
                    className="h-7 mr-5"
                    src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
                    alt="apple"
                  />
                  <a href="">Continuar con Apple</a>
                </div>
              </button>
            </div>
            <div className="flex pb-3 w-auto">
              <button className="flex w-64 items-center border rounded-3xl bg-custom-gray">
                <div className="flex m-2">
                  <img
                    className="h-7 mr-5"
                    src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                    alt="facebook"
                  />
                  <a>Continuar con Facebook</a>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-28 mt-10 mb-10">
          <a href="">Usuario</a>
          <input
            type="text"
            className="border-b-2 border-gray-300 bg-transparent placeholder-gray-500 focus:border-blue-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <a href="/RestablecerUsuario" className="text-xs underline">
            ¿Olvidaste tu usuario?
          </a>
          <a href="">Email</a>
          <input
            type="text"
            className="border-b-2 border-gray-300 bg-transparent placeholder-gray-500 focus:border-blue-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <a href="">Contraseña</a>
          <input
            type="password"
            className="border-b-2 border-gray-300 bg-transparent placeholder-gray-500 focus:border-blue-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="/RestablecerContrasenia" className="text-xs underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <div className="flex ml-28 mt-10 mb-10 items-center">
          <input type="checkbox" />
          <a className="text-xs w-64 ml-2" href="">
            Acepto los términos y condiciones
          </a>
          <Button
            text="Iniciar sesión"
            left="10rem"
            top="88%"
            type="submit"
            width="153px"
            height="56px"
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
