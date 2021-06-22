import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import "./App.css";
import FunnyRankings from "./FunnyRankings";

const callBackendAPI = async () => {
  const response = await fetch("/user-info");
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};

function App() {
  const [data, setData] = useState({ name: "", email: "" });

  useEffect(() => {
    callBackendAPI()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Funny Ranking</h1>
      </header>
      <p className="App-intro">{data.name}</p>
      <p className="App-intro">{data.email}</p>

      {/* Below is the component you design for the funny rankings. Feel free
          to pass any props to it if you want to. The component is defined in 
          FunnyRankings.js. */}
      <FunnyRankings />
    </div>
  );
}

export default App;
