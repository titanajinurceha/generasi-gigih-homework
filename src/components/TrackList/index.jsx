import React from "react";
import Style from "./style.module.css"

export default function TrackList(props) {
  return (
    <div className={Style.card}>
      <b>List URI</b>
      <ol>
        {props.tracksSelected.map((track) => (
          <li key={track}>{track}</li>
        ))}
      </ol>
    </div>
  );
}
