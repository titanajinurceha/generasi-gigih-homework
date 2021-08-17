import React from "react";
import Style from "./style.module.css";
import convertMusicDuration from "../../services/convertMusicDuration";
import convertTrackTitle from "../../services/convertTrackTitle";

type TrackItem = {
  track: {
    album: {
      images: {
        [index: number]: {
          url: string;
        };
      };
      release_date: string;
    };
    name: string;
    artists: {
      [index: number]: {
        name: string;
      };
    };
    duration_ms: number;
    uri: string;
  };
  id: string;
  selectedTracks: Array<string>;
  setSelectedTracks: (query: string[]) => void;
};
export default function Track({track, id, selectedTracks, setSelectedTracks}: TrackItem) {
  const handleButtonSelect = (id: string) => {
    let uri: string = id;
    if (selectedTracks.includes(uri)) {
      let newPlaylist: string[] = selectedTracks.filter(
        (track) => track !== uri
      );
      setSelectedTracks(newPlaylist);
    } else {
      setSelectedTracks([...selectedTracks, uri]);
    }
  };

  return (
    <div className={Style["wrapper-track-list"]}>
      <div className={Style["track-number"]}>
        <p>{id + 1}</p>
      </div>
      <div className={Style["track-image"]}>
        <img src={track.album.images[2]?.url} alt={track?.name} />
      </div>
      <div className={Style["track-title"]}>
        <p>{convertTrackTitle(track.name)}</p>
      </div>
      <div className={Style["track-artist"]}>
        <p>{track.artists[0]?.name}</p>
      </div>
      <div className={Style["track-duration"]}>
        {convertMusicDuration(track.duration_ms)}
      </div>
      <div className={Style["track-action"]}>
        <button
          onClick={() => handleButtonSelect(track?.uri)}
          className={Style["btn-select"]}
        >
          {selectedTracks.includes(track.uri) ? "Deselect" : "Select"}
        </button>
      </div>
    </div>
  );
}
