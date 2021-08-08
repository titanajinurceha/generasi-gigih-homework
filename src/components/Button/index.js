import React from "react";
import "./style.css";

export default function Button({ children, type, onClick}){
    return (
        <button
         onClick={onClick}
         className="btn"
         type={type}
        >
            {children}
        </button>
    )
}