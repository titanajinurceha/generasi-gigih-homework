import Playlist from "./components/Playlist";
import data from "./data/allplaylist";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create Playlist</h1>
      <div className="playlistContainer">
        <Playlist data={data} />
      </div>
    </div>
  );
}

export default App;
