import React, { Component, useState, useEffect } from 'react';
import Header from "./components/Header";
import CafeReviewWriteComponent from "./components/CafeReviewWriteComponent";

import './App.css';

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
          <p>
            {/*{message}*/}
            <CafeReviewWriteComponent/>
          </p>
      </div>
  );
}

export default App;
