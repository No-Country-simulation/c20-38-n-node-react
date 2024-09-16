"use client"
import React, { useState } from "react";
import Users from '../User/personas.json';

export default function App() {
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [messages, setMessages] = useState([
    { text: "Hola, ¿cómo estás?", author: "usuario 2" },
    { text: "Hola, estoy bien, gracias. ¿Y tú?", author: "usuario 1" },
    { text: "Yo también estoy bien. ¿Qué has hecho hoy?", author: "usuario 2" },
    { text: "He trabajado en algunos proyectos. ¿Y tú?", author: "usuario 1" },
  ]);
  const [newMessage, setNewMessage] = useState(""); // Estado para el nuevo mensaje

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return; // No enviar mensajes vacíos

    // Agregar el nuevo mensaje al estado de mensajes
    setMessages([...messages, { text: newMessage, author: 'usuario 1' }]);
    setNewMessage(""); // Limpiar el campo de entrada
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

        <div className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col h-[929px] w-[925px]  ml-4">
          <div className="flex flex-col flex-1 overflow-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.author === 'usuario 1' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] mb-5 p-3 rounded-lg ${message.author === 'usuario 1' ? 'bg-background-chat text-white' : ' text-black'
                    }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center mt-4 border-t border-gray-300 pt-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 mr-2"
              placeholder="Escribe un mensaje..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-background-enviar text-white px-4 py-2 rounded-lg"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
