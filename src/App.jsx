import React, { useState, useEffect } from "react";
import "./index.css";
import Meme from "./Meme";

function App() {
  const [memeLevel, setMemeLevel] = useState(1);
  const [memes, setMemes] = useState([])

  useEffect(() => {
    if (memeLevel === 6) {
      window.location.href =
        "https://www.tomorrowtides.com/alternative-nonexistent-person-wearing-meme-link.html";
    }
  });

  function advanceMemeLevel() {
    setMemeLevel((prevMemeLevel) => prevMemeLevel + 1);
  }

  // Create JSX variable to replace hardcoded Meme components in return clause
  // const memeElements = meme.map()

  return (
    <main>
      <h1>Level {memeLevel} Memes</h1>
      <div className="meme-container">
        {/* {memeElements} */}
        <Meme name="1" />
        <Meme name="2" />
        <Meme name="3" />
        <Meme name="4" />
      </div>
      <button onClick={advanceMemeLevel}>
        {memeLevel === 5 ? "Super Meme" : "Refresh"}
      </button>
    </main>
  );
}

export default App;
