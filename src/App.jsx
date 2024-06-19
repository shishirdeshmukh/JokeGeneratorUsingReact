import { useState } from "react";
import Joke from "./Compoents/Joke";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>Joke Generator Using React and Joke API</h1>
        <Joke />
      </div>
    </>
  );
}

export default App;
