import Button from "../Button";
import Link from "../Link";
import style from "./style.module.css";
const MusicContent = ({ data }) => {
    const { album, external_urls, name} = data;
    return (
        <div className={style.card}>
            <div className={style.imageContainer}>
            <Link href={album.external_urls.spotify}>
                <img
                    className={style.albumArt}
                    src={album.images[0].url}
                    alt={album.name}
                />
            </Link>
            </div>
            <div className={style.description}>
                <div>
                    <h3 className={style.tittle}>
                        <Link href={external_urls.spotify}>{name} - {album.artists[0].name}</Link>
                    </h3>
                    <h4 className={style.albumText}>
                        <Link href={album.external_urls.spotify}>{album.name}</Link>
                    </h4>
                </div>
                <div>
                    <Button onClick={() => {alert("We did it")}}>
                        Select
                    </Button>
                </div>                  
            </div>
        </div>

    );
};

export default MusicContent;