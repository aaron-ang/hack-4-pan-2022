function Meme(props) {
  return (
    <div className="meme">
      <img src={props.img} alt="meme" />
      <h2>Meme {props.name}</h2>
    </div>
  );
}

export default Meme;
