import MusicContent from "./components/MusicContent";
import data from "./data/playlist";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create Playlist</h1>
      <div className="playlistContainer">
        <MusicContent data={data} />
      </div>
    </div>
  );
}

export default App;
