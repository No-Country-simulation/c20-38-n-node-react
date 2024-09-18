"use client";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

export default function App() {
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [token, setToken] = useState(null);
  const [socket, setSocket] = useState(null);
  const [chatsData, setChatsData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [id_chat, setIdChat] = useState("");
  const [messageText, setMessageText] = useState("");
  const [allUser, setallUser] = useState([]);
  const [ownDataUser, setownDataUser] = useState()

  const url = "https://inative-back.onrender.com";


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
    if (socket) {
      socket.on("message", (newMessage) => {
        setMessages(newMessage);
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
console.log(chatsData);
  const sendMessage = (event) => {
    event.preventDefault();
    const dataLogin = Object.fromEntries(new FormData(event.target));

    if (socket) {
      socket.emit("message", {
        id_chat: id_chat,
        message: dataLogin,
      });
    }

    setTimeout(() => {
      ingresarAlChat(id_chat);
    }, 100);
  };

  const getChatByUserId = async (id) => {
    await fetch(`${url}/getChatsByUserId/${id}`)
      .then((response) => response.json())
      .then((result) => setChatsData(result))
      .catch((error) => console.error(error));
  };

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
            getChatByUserId(result?.userToken.id_user)
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
    <div className="flex justify-center mt-28">
      <div className="flex flex-col bg-white border border-gray-300 rounded-lg p-4 w-[383px] max-h-[710px] mb-28">
        <div className="bg-slate-500 text-white p-2 mb-4 rounded-t-lg">
          <h2>Historial</h2>
        </div>
        <div className="flex flex-col space-y-2 max-h-[700px] overflow-y-auto">
          {chatsData.map((chat, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => { handleUserClick(chat.message_x_chats[0]?.message.user), ingresarAlChat(chat.id_chat) }}
            >
              <img
                src={chat.message_x_chats[0]?.message.user.avatar}
                alt="User Photo"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
              <div className="flex-1">
                <h3 className="text-blue-600">{chat.message_x_chats[0]?.message.user.full_name}</h3 >
              </div>
              <div className="flex items-center space-x-1">
                <div
                  className={`w-3 h-3 rounded-full ${chat.message_x_chats[0]?.message.user.status === 'connected' ? 'bg-green-500' : 'bg-gray-500'}`}
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
                src={selectedUser.avatar}
                alt="User Photo"
                className="w-12 h-12 rounded-full border border-gray-300"
              />
              <div className="flex-1 ml-4">
                <h3 className="font-bold text-lg">{selectedUser.user_name}</h3>
              </div>
              <div
                className={`w-3 h-3 rounded-full ${selectedUser.status === 'connected' ? 'bg-green-500' : 'bg-gray-500'}`}
              ></div>
            </div>
          ) : (
            <p>Selecciona un usuario para ver los detalles</p>
          )}
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col h-[929px] w-[925px] mt-10 ml-4">
          <div className="flex flex-col flex-1 overflow-auto mt">
            {messages?.data?.map((message, index) => {
              return (
                <div
                  key={index}
                  className={`text ${message?.message?.user?.id_user !== messages?.id_user
                    ? 'text-start bg-[#E7E7E7] my-2 text-sm  mb-5 p-3 rounded-lg mr-auto'
                    : 'text-end ml-auto  bg-background-chat my-2 text-sm  mb-5 p-3 rounded-lg '
                    } `}
                >
                  <div className=" w-fit ">
                    {message.message.message}
                    </div>
                </div>
              );
            })}
          </div>

          <form onSubmit={sendMessage} className="flex items-center mt-4 border-t border-gray-300 pt-2">
            <input
              name="message"
              type="text"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 mr-2"
              placeholder="Escribe un mensaje..."
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
