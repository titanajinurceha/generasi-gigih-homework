import React from "react";
import Style from "./style.module.css";

export default function Track( track, id, selectedTracks, setSelectedTracks ){
    const handleButtonSelect = (e) => {
        let uri = e.target.value;
        if (selectedTracks.includes(uri)) {
          let newPlaylist = selectedTracks.filter((track) => track !== uri);
          setSelectedTracks(newPlaylist);
        } else {
          setSelectedTracks([...selectedTracks, uri]);
        }
      };

      const convertDuration = (duration) => {
        let minutes = Math.floor(duration / 60000);
        let seconds = ((duration % 60000) / 1000).toFixed(0);
      
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      };

      const convertTrackTittle = (title) => {
        if (title.length > 25 ){
          return title.substring(0,25) + "...";
        }
        return title;
      };

      return (
        <div className={Style["wrapper-track-list"]}>
          <div className={Style["track-number"]}>
            <p>{id + 1}</p>
          </div>
          <div className={Style["track-image"]}>
            <img src={track.album?.images[2].url} alt={track.name} />
          </div>
          <div className={Style["track-title"]}>
            <p>{convertTrackTittle(track.name)}</p>
          </div>
          <div className={Style["track-artist"]}>
            <p>{track.artists[0]?.name}</p>
          </div>
    
          <div className={Style["track-duration"]}>
            {convertDuration(track?.duration_ms)}
          </div>
          <div className={Style["track-action"]}>
            <button
              onClick={(e) => handleButtonSelect(e)}
              value={track?.uri}
              className={Style["btn-select"]}
            >
              {selectedTracks.includes(track?.uri) ? "Deselect" : "Select"}
            </button>
          </div>
        </div>
    )
}