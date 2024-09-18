'use client'
import React, { useEffect, useState } from "react";
import User from "../../component/User/User.jsx"; // Ajusta la ruta según sea necesario

export default function App() {
    const [userName, setUserName] = useState(null);
    const [allUser, setallUser] = useState([]);
    const [ownDataUser, setownDataUser] = useState()


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUser(token);
            (
                async () => {
                    try {
                        const response = await fetch(`https://inative-back.onrender.com/getUserByToken/${token}`, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });

                        if (!response.ok) {
                            throw new Error("Error al traer los datos");
                        }

                        const result = await response.json();
                        setownDataUser(result)
                        // Redirigir al chat
                    } catch (error) {
                        console.error("Error al traer los datos:", error);
                    }
                })()
        }

    }, []);

    const fetchUser = async (token) => {
        try {
            const response = await fetch("https://inative-back.onrender.com/getAllUser", {
                method: "GET", 
                headers: {
                    Authorization: `Bearer ${token}`, 
                    "Content-Type": "application/json", 
                },
            });

            if (response.ok) {
                const data = await response.json();
                setallUser(data); 
            } else {
                console.error("Error fetching user data:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (



        <div>
            <div className="flex justify-center
            mt-10 mb-10">
                <a href="" className=" text-3xl font-semibold text-center w-[400px] ">Elige tu persona nativa para conectar y aprender</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 p-6">
                {allUser?.map((persona, index) => (
                    <User key={index} persona={persona} ownDataUser={ownDataUser} />
                ))}

            </div>
        </div>
    );
}

