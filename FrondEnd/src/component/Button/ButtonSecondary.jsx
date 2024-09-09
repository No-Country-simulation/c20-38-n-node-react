import React from "react";
import styles from "./Button.module.css";


const ButtonSecondary= ({ text, left, top, type,height,width,borderColor,onClick }) => {
  return (
    <button
    onClick={onClick}
      style={{ left: left, top: top ,height:height, width:width ,border: `2px solid ${borderColor}`,}}
      type={type}
      className="bg-white rounded-3xl"
    >
      <p>
        {text}
      </p>
    </button>
  );
};





export default ButtonSecondary;