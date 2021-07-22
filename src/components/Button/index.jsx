import React from "react";

export default function Button(props){
    return (
        <button
         onClick={props.onClick}
         className={props.className}
         style={props.style}
         type="button"
        >
            {props.value}
        </button>
    )
}