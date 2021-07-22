import Button from "../Button";
import ImgCover from "../ImgCover";
import DescTittle from "../DescTittle";
import Style from "./style.module.css";

export default function MusicContent(props){
    return (
        <div className={Style.trackcard}>
            <ImgCover height={props.height} url={props.imgUrl} />
            <div className={Style.trackinfo}>
                <DescTittle title="Title" value={props.title} />
                <DescTittle title="Artist" value={props.artistName} />
                <DescTittle tittle="Album" value={props.albumName} />
                <Button className={Style.button} value="Select" />
            </div>
        </div>
    )
}