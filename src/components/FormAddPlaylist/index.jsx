import React from "react";
import Style from "./style.module.css";

export default function FormAddPlaylist(props) {
  return (
    <div style={{ marginRight: "2em" }}>
      <form onSubmit={props.handleOnSubmit} className={Style.card}>
        <div className={Style.formControl}>
          <label className={Style.label} htmlFor="title">
            Judul
          </label>
          <input
            id="title"
            className={Style.input}
            type="text"
            minLength="10"
            name="title"
            autoComplete="off"
            value={props.data.title}
            onChange={props.handleOnChange}
          />
        </div>
        <div className={Style.formControl}>
          <label className={Style.label} htmlFor="description">
            Deskripsi
          </label>
          <textarea
            id="description"
            className={Style.input}
            minLength="20"
            name="description"
            rows="3"
            autoComplete="off"
            value={props.data.description}
            onChange={props.handleOnChange}
          />
        </div>
        <button className={Style.searchButton} type="submit">
          Create!
        </button>
      </form>
    </div>
  );
}
