import React, { Component, useState, useEffect } from 'react';
import Header from "./components/Header";
import AppRouter from "./AppRouter";

import './App.css';
import {Container} from "@material-ui/core";

function App() {

  // const [message, setMessage] = useState("");
  //
  // useEffect(() => {
  //   fetch('/api/hello')
  //       .then(response => response.text())
  //       .then(message => {
  //         setMessage(message);
  //       });
  // },[])

  return (
      <div>
          <Header/>
      <div>
          <AppRouter/>
      </div>
      </div>
  );
}

export default App;
