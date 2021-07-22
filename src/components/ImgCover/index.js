export default function ImgCover(props){
    return (
        <img
            alt="songs"
            style={{
                height: props.height -459,
                width: "auto"
            }}
            src={props.url}
        />
    )
}