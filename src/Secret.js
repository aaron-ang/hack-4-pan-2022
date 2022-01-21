import ReactPlayer from "react-player";

function Secret() {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/embed/dQw4w9WgXcQ?"
        playing="true"
        style={{ pointerEvents: "none" }}
        width="50%"
        height="35em"
      />
    </div>
  );
}

export default Secret;
