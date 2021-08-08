import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  loginAuthorizeSpotify,
  getAccessTokenFromURL,
} from "../../lib/spotifyAuth";

import { getProfile } from "../../lib/spotifyApi";

import { login, storeUserData } from "../../redux/userSlice";

import Style from "./style.module.css";

export default function Landingpage() {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getAccessTokenFromURL(window.location.hash);
      dispatch(login(access_token));
      getProfile(access_token).then((data) => dispatch(storeUserData(data)));
      history.push("/create-playlist");
    }
  }, [dispatch, history]);

  return (
    <div className={Style.wrapperHome}>
      <div className={Style.banner}>
        <h1>Music Player</h1>
        <p>welcome to landing page</p>
        <button onClick={loginAuthorizeSpotify}>Login</button>
      </div>
    </div>
  );
}
