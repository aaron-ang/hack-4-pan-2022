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
  const [memeLevel, setMemeLevel] = useState(1);
  const [memes, setMemes] = useState(
    importAll(require.context("./images/memes", false, /\.(png|jpe?g|svg)$/))
  );

  let navigate = useNavigate();
  function directToSecret() {
    navigate("/secret");
  }

  // Check memeLevel state whenever app re-renders
  useEffect(() => {
    if (memeLevel === 6) {
      directToSecret();
    }
  });

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

  function renderSwitch(memeLevel) {
    switch (memeLevel) {
      case 1:
        return memeElements.slice(0, 4)
      case 2:
        return memeElements.slice(4, 8)
      case 3:
        return memeElements.slice(8, 12)
      case 4:
        return memeElements.slice(12, 8)
      case 5:
        return memeElements.slice(16, 20)
      default:
        console.log("memeLevel exceeded");
    }
  }

  return (
    <main>
      <h1>Level {memeLevel} Memes</h1>
      <div className="meme-container">
        {renderSwitch(memeLevel)}
        {/* remove hard-coded meme components below once meme images are imported */}
        <Meme name="1" img={placeholder} />
        <Meme name="2" img={placeholder} />
        <Meme name="3" img={placeholder} />
        <Meme name="4" img={placeholder} />
      </div>
      <button onClick={advanceMemeLevel}>
        {memeLevel === 5 ? "Super Meme" : "Refresh"}
      </button>
    </main>
  );
}

export default App;
