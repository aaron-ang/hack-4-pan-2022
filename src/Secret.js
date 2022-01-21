import ReactPlayer from "react-player";

function Secret() {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/embed/dQw4w9WgXcQ?"
        playing="true"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}

export default Secret;
