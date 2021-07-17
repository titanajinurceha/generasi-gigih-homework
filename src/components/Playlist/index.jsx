import MusicContent from "../MusicContent";
const Playlist = ({data}) =>{
    return(
        <div className="playlistContainer">
        {data.map((music)=> (
            <MusicContent key={music.id} data={music} />
        ))}
        </div>
    );
};

export default Playlist;