import React from "react";
import "../App.css";

function Index(props) {
  return <button onClick={props.callApi}>Click to Generate a Joke</button>;
}

export default Index;
