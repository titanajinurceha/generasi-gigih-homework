import React from "react";
import Button from "../../components/Button";
import Style from "./style.module.css";

export default function Landingpage() {
  const generateRandomString = (length) => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const loginSpotify = () => {
    const state = generateRandomString(16);
    localStorage.setItem("spotify_auth_state", state);
    const scope = "playlist-modify-private user-read-private user-read-email";
    let url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += `&client_id=${encodeURIComponent(
      process.env.REACT_APP_SPOTIFY_CLIENT_ID
    )}`;
    url += `&scope=${encodeURIComponent(scope)}`;
    url += `&redirect_uri=${encodeURIComponent(
      process.env.REACT_APP_REDIRECT_URI
    )}`;
    url += `&state=${encodeURIComponent(state)}`;
    window.location = url;
  };
  
  return (
    <div className={Style.container}>
      <Button
        className={Style.button}
        value="Login"
        onClick={() => loginSpotify()}
      />
    </div>
  );
}
