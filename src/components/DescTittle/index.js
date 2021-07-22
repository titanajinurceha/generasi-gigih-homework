import React from "react";
import Style from "./style.module.css";

export default function DescTittle({ title, value}){
    return(
        <div className={Style.container}>
            <span style={Style.spantitle}> {title} </span>
            <span style={Style.spantext}> {value}</span>
        </div>
    );
}