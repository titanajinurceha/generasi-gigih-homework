import React from "react";
import Style from "./style.module.css";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { logout } from "../../../redux/userSlice";

export default function Navbar() {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div className={Style["wrapper-navbar"]}>
      <div className={Style["logo"]}>
        <h2>Spotify</h2>
      </div>
      <div className={Style["menus"]}>
        <button className={Style["menu"]}>Search</button>
        <button className={Style["menu"]}>Create Playlist</button>
        <button onClick={handleLogoutClick} className={Style["menu"]}>
          Logout
        </button>
      </div>
    </div>
  );
}
