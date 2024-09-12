
import React from "react";
import styles from "./Button.module.css";



const Button = ({ text, left, top, width, height, onClick }) => {

  return (
    <button
      onClick={onClick}
      style={{ left: left, top: top, height: height, width: width }}
      className="bg-Buttom-primary rounded-3xl text-white"
    >
      <p>
        {text}
      </p>
    </button>
  );
};





export default Button;