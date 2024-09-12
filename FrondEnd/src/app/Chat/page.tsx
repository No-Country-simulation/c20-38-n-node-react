"use client";
import { useEffect, useState } from "react";
import io from "socket.io-client";

export default function App() {
  const socket = io("http://localhost:8000");

  const [message, setmessage] = useState([]);
  const [chats, setchats] = useState([]);
  const id_chat = "1"; // El ID del chat que debes gestionar

  useEffect(() => {

    socket.on("initial_response", () => {
    });

    (async () => {
      await fetch("http://localhost:8000/getChatsByUserId/1")
        .then((response) => response.json())
        .then((result) => setchats(result))
        .catch((error) => console.error(error));
    })();
  }, []);

  const ingresarAlChat =async (id_chat:string) =>{

    console.log("id_chat",id_chat)
    
    socket.emit("joinChat", { id_chat });


  }

  socket.on("message", (message) => {
    setmessage(message);
  });

  const sendMessage = (event) => {
    event.preventDefault();

    const dataLogin = Object.fromEntries(new FormData(event.target));

    console.log("dataLogin", dataLogin);

    socket.emit("message", {
      id_chat: id_chat,
      id_sender_message: 1,
      message: dataLogin,
    });
  };

  console.log("message", message);

  return (
    <div className="h-screen  bg-zinc-800 text-white flex items-center justify-center">
      <div className="flex flex-col gap-10 bg-white text-slate-600 w-[25rem] h-[45rem] p-8">
        {chats?.map((chat: any, index: number) => (
          <div key={index} className="flex flex-col text-white bg-zinc-900 p-2">
            {chat.message_x_chats?.[0]?.message?.user?.full_name ? (
              <div onClick={()=>{ingresarAlChat(chat.id_chat)}} className="cursor-pointer">
                <div>{chat.message_x_chats[0].message.user.full_name} :</div>
                <div>{chat.message_x_chats[0].message.message}</div>
              </div>
            ) : (
              <div>No hay mas mensajes disponibles</div>
            )}
          </div>
        ))}

        {/* <button
          onClick={traerMensajes}
          className="absolute left-1/2 top-10 bg-white rounded-md p-2"
        >
          Traer Chats
        </button> */}
      </div>

      <form
        onSubmit={sendMessage}
        className="w-[30rem] h-[45rem] bg-zinc-900 p-10"
      >
        <h1 className="text-2xl font-bold my-2">Chat React</h1>
        <input
          name="message"
          type="text"
          placeholder="Write your message..."
          className="border-2 border-zinc-500 p-2 w-full text-black"
          autoFocus
        />

        <ul className="h-80 overflow-y-auto">
          {message?.map((message: any, index: number) => (
            <li
              key={index}
              className={`my-2 p-2 table text-sm rounded-md  "bg-black"
              `}
            >
              <span style={{ color: "red" }}>
                {message.message.user.user_name}
              </span>
              : {message.message.message}
            </li>
          ))}
        </ul>
        <button>Send</button>
      </form>
    </div>
  );
}
