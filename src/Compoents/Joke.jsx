import React, { useState } from "react";
import Index from ".";
import "../App.css";

function Joke() {
  const [joke, setJoke] = useState("");

  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((e) => e.json())
      .then((data) => setJoke(data.joke));
  };
  return (
    <div className="joke">
      <Index callApi={fetchApi} />
      <div className="jokebody">{joke}</div>
    </div>
  );
}

export default Joke;
