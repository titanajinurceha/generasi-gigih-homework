import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import SearchBar from "../../components/searchBar";
import FormCreatePlaylist from "../../components/formCreatePlaylist";
import TrackList from "../../components/TrackList";
import TrackStructure from "../../components/trackStructure";
import Navbar from "../../components/layout/navbar";

import { storeTrackList } from "../../redux/tracklistSlice";

import Style from "./style.module.css";

import {
  getSearchTracks,
  createNewPlaylist,
  storeTracksToNewPlaylist,
} from "../../lib/spotifyApi";

export default function CreatePlaylist() {
  const token = useSelector((state) => state.user.accessToken);
  const userID = useSelector((state) => state.user.data.id);
  const tracks = useSelector((state) => state.tracks.tracksList);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [selectedTracks, setSelectedTracks] = useState([]);

  const [postPlaylist, setPostPlaylist] = useState({
    name: "",
    description: "",
    public: false,
    collaborative: false,
  });

  const buttonHandleSearch = () => {
    setIsLoading(true);
    if (search === "") {
      alert("Search Cannot Be Empty");
    } else {
      getSearchTracks(search, token).then((data) => {
        dispatch(storeTrackList(data.tracks.items));
        setIsLoading(false);
      });
      setSearch("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedTracks.length <= 0) {
      alert("You have to selected song first");
    } else {
      createNewPlaylist(userID, token, postPlaylist).then((newPlaylist) =>
        storeTracksToNewPlaylist(newPlaylist.id, token, selectedTracks).then(
          (data) => console.log(data)
        )
      );

      alert("Create New Playlist Has Been Successfully");

      setPostPlaylist({
        name: "",
        description: "",
      });
      setSelectedTracks([]);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={Style["wrapper-create-playlist"]}>
        <h3>Create Playlist</h3>
        <div className={Style["search-bar"]}>
          <SearchBar
            search={search}
            setSearch={setSearch}
            buttonHandleSearch={buttonHandleSearch}
          />
        </div>

        <div className={Style["list-track"]}>
          {isLoading ? (
            <div>
              <TrackStructure />
              <TrackStructure />
              <TrackStructure />
              <TrackStructure />
              <TrackStructure />
            </div>
          ) : (
            <TrackList
              tracks={tracks}
              selectedTracks={selectedTracks}
              setSelectedTracks={setSelectedTracks}
            />
          )}
        </div>

        <div className={Style["form-create-playlist"]}>
          {selectedTracks.length > 0 && (
            <FormCreatePlaylist
              postPlaylist={postPlaylist}
              setPostPlaylist={setPostPlaylist}
              handleFormSubmit={handleFormSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
