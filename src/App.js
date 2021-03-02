import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://3.20.96.207:8000";

//code from https://www.valentinog.com/blog/socket-react/

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("rate", data => {
      setResponse(data);
    });
  }, []);

  function colorFromRate(params) {
    if(params == 0){
      return '#282c34';
    }
    else{
      
      return '#282c34';
    }
  }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: colorFromRate(response)}}>
        {response}
        {response != 0 ? response: "Error: Heartrate Unavailable"}
      </header>
    </div>
  );
}

export default App;
