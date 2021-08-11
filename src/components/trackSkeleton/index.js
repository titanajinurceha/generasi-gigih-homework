import React from "react";
import Style from "./style.module.css";

export default function TrackSkeleton(){
    return(
        <div className={Style["wrapper-track-list"]}>
            <div className={Style["track-number"]}></div>
            <div className={Style["track-image"]}></div>
            <div className={Style["track-title"]}></div>
            <div className={Style["track-artist"]}></div>
            <div className={Style["track-duration"]}></div>
            <div className={Style["track-action"]}></div>
        </div>
    )
}