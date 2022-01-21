import placeholder from "./images/memes/Placeholder.jpeg";

function Meme(props) {
  return (
    <div className="meme">
      <img src={placeholder}></img>
      <h2>Meme {props.name}</h2>
    </div>
  );
}

export default Meme;
