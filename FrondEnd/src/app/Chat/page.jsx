"use client";
import { divider } from "@nextui-org/theme";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import Chat from '../../component/Chat/Chat.jsx'
export default function Page() {
  // const [message, setMessage] = useState([]);
  // const [chats, setChats] = useState([]);
  // const id_chat = "1"; // El ID del chat que debes gestionar

  // useEffect(() => {
  //   // Conecta al servidor de Socket.io
  //   const socket = io("http://inative-back.onrender.com/");

  //   // Maneja el evento de conexión inicial
  //   socket.on("initial_response", () => {
  //     // Puedes agregar lógica aquí si es necesario
  //   });

  //   // Obtén los chats por usuario al cargar el componente
  //   (async () => {
  //     try {
  //       const response = await fetch("http://inative-back.onrender.com/getChatsByUserId/2");
  //       const result = await response.json();
  //       setChats(result);
  //     } catch (error) {
  //       console.error("Error fetching chats:", error);
  //     }
  //   })();

  //   // Maneja los mensajes recibidos
  //   socket.on("message", (message) => {
  //     setMessage((prevMessages) => [...prevMessages, ...message]);
  //   });

  //   return () => {
  //     // Limpia los manejadores de eventos al desmontar el componente
  //     socket.off("initial_response");
  //     socket.off("message");
  //     socket.disconnect();
  //   };
  // }, []);

  // const ingresarAlChat = async (id_chat) => {
  //   console.log("id_chat", id_chat);
  //   // Aquí también podrías manejar errores si es necesario
  //   socket.emit("joinChat", { id_chat });
  // };

  // const sendMessage = (event) => {
  //   event.preventDefault();

  //   const dataLogin = Object.fromEntries(new FormData(event.target));

  //   console.log("dataLogin", dataLogin);

  //   socket.emit("message", {
  //     id_chat: id_chat,
  //     id_sender_message: 1,
  //     message: dataLogin.message, // Asegúrate de acceder a 'message' correctamente
  //   });
  // };

  return (
    // <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
    //   <div className="flex flex-col gap-10 bg-white text-slate-600 w-[25rem] h-[45rem] p-8">
    //     {chats?.map((chat, index) => (
    //       <div key={index} className="flex flex-col text-white bg-zinc-900 p-2">
    //         {chat.message_x_chats?.[0]?.message?.user?.full_name ? (
    //           <div
    //             onClick={() => ingresarAlChat(chat.id_chat)}
    //             className="cursor-pointer"
    //           >
    //             <div>{chat.message_x_chats[0].message.user.full_name} :</div>
    //             <div>{chat.message_x_chats[0].message.message}</div>
    //           </div>
    //         ) : (
    //           <div>No hay más mensajes disponibles</div>
    //         )}
    //       </div>
    //     ))}
    //   </div>

    //   <form onSubmit={sendMessage} className="w-[30rem] h-[45rem] bg-zinc-900 p-10">
    //     <h1 className="text-2xl font-bold my-2">Chat React</h1>
    //     <input
    //       name="message"
    //       type="text"
    //       placeholder="Write your message..."
    //       className="border-2 border-zinc-500 p-2 w-full text-black"
    //       autoFocus
    //     />
    //     <ul className="h-80 overflow-y-auto">
    //       {message?.map((msg, index) => (
    //         <li key={index} className="my-2 p-2 table text-sm rounded-md bg-black">
    //           <span style={{ color: "red" }}>{msg.message.user.user_name}</span>: {msg.message.message}
    //         </li>
    //       ))}
    //     </ul>
    //     <button type="submit">Send</button>
    //   </form>
    // </div>
    <main className="bg-white">
    <div className="flex justify-center items-center">
    <Chat/>
    </div>
  </main>
  );
}
