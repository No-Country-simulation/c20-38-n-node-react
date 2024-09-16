"use client";
import React, { useState, useEffect } from "react";
import Users from '../User/personas.json';
import io from "socket.io-client";
import { useUser } from '../../hooks/useUser';

export default function App() {
  const [selectedUser, setSelectedUser] = useState(undefined);
  const { userData } = useUser();
  const [token, setToken] = useState(null);
  const [socket, setSocket] = useState(null);
  const [chatsData, setChatsData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [id_chat, setIdChat] = useState("");
  const [messageText, setMessageText] = useState("");

  const url = "https://inative-back.onrender.com";

  // Obtener el token del localStorage solo en el lado del cliente
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    if (token) {
      const newSocket = io(url, {
        transports: ["websocket"],
        auth: { token: token },
      });

      setSocket(newSocket);

      return () => {
        if (newSocket) {
          newSocket.disconnect();
        }
      };
    }
  }, [token]);

  useEffect(() => {
    (async () => {
      await fetch(`${url}/getChatsByUserId/1`)
        .then((response) => response.json())
        .then((result) => {
          console.log("Respuesta de la API de chats:", result); // Ver la respuesta en la consola
          setChatsData(result); // Actualiza el estado con los datos de la API
        })
        .catch((error) => console.error("Error al obtener los chats:", error));
    })();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("message", (newMessage) => {
        console.log("Nuevo mensaje recibido:", newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        console.log("Hola");
      });

      return () => {
        socket.off("message");
      };
    }
  }, [socket]);

  const ingresarAlChat = async (id_chat) => {
    setIdChat(id_chat);
    if (socket) {
      socket.emit("joinChat", { id_chat });
      setMessages([]);
    }
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (messageText.trim() !== "" && socket) {
      socket.emit("message", {
        id_chat: id_chat,
        message: messageText,  // Enviar el texto del mensaje
      });
      // Limpiar el campo de texto después de enviar el mensaje
      setMessageText("");
    }
  };

  return (
    <div className="flex justify-center mt-28">
      <div className="flex flex-col bg-white border border-gray-300 rounded-lg p-4 w-[383px] max-h-[710px] mb-28">
        <div className="bg-slate-500 text-white p-2 mb-4 rounded-t-lg">
          <h2>Historial</h2>
        </div>
        <div className="flex flex-col space-y-2 max-h-[700px] overflow-y-auto">
          {Users.map((user, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => handleUserClick(user)}
            >
              <img
                src={user.foto}
                alt="User Photo"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
              <div className="flex-1">
                <h3 className="text-blue-600">{user.nombre}</h3 >
              </div>
              <div className="flex items-center space-x-1">
                <div
                  className={`w-3 h-3 rounded-full ${user.estado === 'Activo' ? 'bg-green-500' : 'bg-gray-500'}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col ml-4 mb-28 w-[957px]">
        <div className="h-[71px] flex items-center p-4">
          {selectedUser ? (
            <div className="flex items-center justify-between h-[71px] w-full bg-white border border-gray-300 rounded-lg p-4">
              <img
                src={selectedUser.foto}
                alt="User Photo"
                className="w-12 h-12 rounded-full border border-gray-300"
              />
              <div className="flex-1 ml-4">
                <h3 className="font-bold text-lg">{selectedUser.nombre}</h3>
              </div>
              <div
                className={`w-3 h-3 rounded-full ${selectedUser.estado === 'Activo' ? 'bg-green-500' : 'bg-gray-500'}`}
              ></div>
            </div>
          ) : (
            <p>Selecciona un usuario para ver los detalles</p>
          )}
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col h-[929px] w-[925px] ml-4">
          <div className="flex flex-col flex-1 overflow-auto">
            {chatsData?.map((chat, index) => (
              <div key={index} className="flex flex-col text-white bg-zinc-900 p-2">
                {chat.message_x_chats?.[0]?.message?.user?.full_name ? (
                  <div onClick={() => ingresarAlChat(chat.id_chat)} className="cursor-pointer">
                    <div>{chat.message_x_chats[0].message.user.full_name} :</div>
                    <div>{chat.message_x_chats[0].message.message}</div>
                  </div>
                ) : (
                  <div>No hay más mensajes disponibles</div>
                )}
              </div>
            ))}

            {messages?.map((message, index) => (
              <li key={index} className="my-2 p-2 table text-sm rounded-md bg-black">
                <span style={{ color: "red" }}>{message.message.user.user_name}</span>: {message.message.message}
              </li>
            ))}
          </div>

          <form onSubmit={sendMessage} className="flex items-center mt-4 border-t border-gray-300 pt-2">
            <input
              type="text"
              name="message"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 mr-2"
              placeholder="Escribe un mensaje..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)} // Actualizar el estado con el texto del mensaje
              autoFocus
            />
            <button type="submit" className="bg-background-enviar text-white px-4 py-2 rounded-lg">
              Enviar
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
