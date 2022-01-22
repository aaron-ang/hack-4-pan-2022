import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import placeholder from "./images/memes/Placeholder.jpeg";
import "./index.css";
import Meme from "./Meme";

// Get JS object of memes folder
function importAll(r) {
  let images = [];
  images = r.keys().map((item) => {
    return { name: item.replace("./", ""), dir: r(item) };
  });
  return images;
}

function App() {
  const allMemes = importAll(
    require.context("./images/memes", false, /\.(png|jpe?g|svg)$/)
  );
  const [memeLevel, setMemeLevel] = useState(0);
  const [memes, setMemes] = useState(getMemesByLevel(memeLevel));

  function getMemesByLevel(memeLevel) {
    return allMemes.slice(memeLevel * 4, memeLevel * 4 + 4);
  }

  let navigate = useNavigate();
  function directToSecret() {
    navigate("/secret");
  }

  // Check memeLevel state whenever app re-renders
  useEffect(() => {
    if (memeLevel === 5) {
      directToSecret();
    }
    setMemes(getMemesByLevel(memeLevel));
  },[memeLevel]);

  function advanceMemeLevel() {
    setMemeLevel((prevMemeLevel) => prevMemeLevel + 1);
  }

  // Create JSX variable to replace hardcoded Meme components in return clause
  const memeElements = memes.map((memeImgSrc) => {
    return (
      <Meme
        key={memeImgSrc.name}
        name={memes.indexOf(memeImgSrc) + 1}
        img={memeImgSrc.dir}
      />
    );
  });

  return (
    <main>
      <h1>Level {memeLevel} Memes</h1>
      <div className="meme-container">
        {memeElements}
        <Meme name="1" img={placeholder} />
        <Meme name="2" img={placeholder} />
        <Meme name="3" img={placeholder} />
        <Meme name="4" img={placeholder} />
      </div>
      <button onClick={advanceMemeLevel}>
        {memeLevel === 4 ? "Super Meme" : "Refresh"}
      </button>
    </main>
  );
}

export default App;
