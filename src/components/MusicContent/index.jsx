import Button from "../Button";
import ImgCover from "../ImgCover";
import DescTittle from "../DescTittle";
import Style from "./style.module.css";

export default function MusicContent( height, imgUrl, title, artistName, albumName, selected, onSelected, onDeselected ){
    return (
        <div className={Style.trackcard}>
            <ImgCover height={height} url={imgUrl} />
            <div className={Style.trackinfo}>
                <DescTittle title="Title" value={title} />
                <DescTittle title="Artist" value={artistName} />
                <DescTittle tittle="Album" value={albumName} />
                <Button 
                    className={Style.button}
                    value={selected ? "Deselect" : "Select"}
                    onClick={selected ? onDeselected : onSelected}
                />
            </div>
        </div>
    )
}