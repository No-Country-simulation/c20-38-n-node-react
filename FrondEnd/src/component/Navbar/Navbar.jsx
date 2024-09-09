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
        <Navbar>
            <Button >
                <NavbarBrand>
                    <img href="/" className="w-20" alt="Logo" src="https://iili.io/dj8KH0X.png" />
                </NavbarBrand>
            </Button>
            <div className="flex-grow" />
            <NavbarContent className="hidden sm:flex gap-8" justify="end">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Nosotros
                    </Link>
                </NavbarItem>
                <NavbarItem>
                </NavbarItem>
                <NavbarItem>
                    <ButtonSecondary text='Iniciar sesión' left='10rem' top='88%' type='submit' width='153px' height='56px' borderColor='#FF6B6B' onClick={handleClick} />

                </NavbarItem>
            </NavbarContent>
        </Navbar>

    );
}
