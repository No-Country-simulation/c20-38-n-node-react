"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import ButtonSecondary from "../Button/ButtonSecondary.jsx";
import { useRouter } from 'next/navigation';

export default function App() {

    const router = useRouter();

    const handleClick = () => {
        router.push('/Login'); // Redirige a la página de login
    };


    return (
        <footer className="bg-background-footer text-black py-6">
            <div className="flex justify-center">
                <img className="w-20" alt="Logo" src="https://iili.io/dj8KH0X.png" />
            </div>


            <div className="container mx-auto text-center">
                <nav>
                    <ul className="flex justify-center space-x-60 mt-5 ">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/nosotros">Nosotros</Link></li>
                        <li><Link href="/Login">Aprende gratis</Link></li>
                        <li><Link href="/Login">Iniciar sesion</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="flex justify-center space-x-10 mt-5">
                <img className="w-8" alt="Logo" src="https://iili.io/dOmnpQs.png" />
                <img className="w-8" alt="Logo" src="https://iili.io/dOmnmjn.png" />
                <img className="w-8" alt="Logo" src="https://iili.io/dOmnbTX.png" />
            </div>
            <div>
            <p className="flex justify-center mt-5">
          &copy; {new Date().getFullYear()} Copyright
        </p>
            </div>
        </footer>

    );
}
