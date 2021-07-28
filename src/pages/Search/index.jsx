import React, { useState } from "react";
import MusicContent from "../../components/Track";
import Style from "./style.module.css";

export default function Search(props) {
  const [result, setResult] = useState(null);
  const [search, setSearch] = useState("");
  const [trackSelected, setTrackSelected] = useState([]);

  const getSearchResult = () => {
    fetch(`https://api.spotify.com/v1/search?q=${search}&type=track`, {
      headers: { Authorization: "Bearer " + props.params.access_token },
    })
      .then((response) => response.json())
      .then((response) => setResult(response.tracks));
  };

  const onDeselect = (trackID) => {
    const newTrackSelected = trackSelected.filter((track) => track !== trackID);
    setTrackSelected([...newTrackSelected]);
  };

  const onSelect = (trackID) => {
    setTrackSelected([...trackSelected,trackID]);
  };

  return (
    <>
      <h1 className={Style.h1}>Playlist Search</h1>
      <div className={Style.rowCenter}>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className={Style.inputText}
          type="text"
          name="search"
        />
        <button
          onClick={() => getSearchResult()}
          className={Style.searchButton}
          type="button"
        >
          Search
        </button>
      </div>
      {result ? (
        <>
          <h3 className={Style.h3}>
            Showing {result.items.length} tracks
          </h3>
          {result.items.map((track, i) => {
            return (
              <MusicContent
                key={i}
                height={track.album.images[0].height}
                imgUrl={track.album.images[0].url}
                title={track.name}
                artistName={track.artists[0].name}
                albumName={track.album.name}
                onSelected={() => onSelect(track.id)}
                selected={trackSelected.some((trackID) => trackID === track.id)}
                onDeselect={() => onDeselect(track.id)}
              />
            );
          })}
        </>
      ) : (
        <h3 className={Style.h3}>No Tracks Show</h3>
      )}
    </>
  );
}
