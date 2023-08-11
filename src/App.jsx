import React, { useState } from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import './App.css'

function App() {
  const var10_1 = import.meta.env.VITE_10_1_VAR;
  console.log("show the environment variable", var10_1 ) 
  return (
    <>
      <Router>
        <h1>ScreenViews</h1>

        <h2>-TEST-{var10_1 }</h2>
      </Router>
    </>
  );
}

export default App
