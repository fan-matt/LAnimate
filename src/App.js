import React from 'react';
import logo from './logo.svg';
import "./reset.css";
import './App.css';

import MainHeader from "./components/MainHeader/MainHeader.js";
import GraphApp from "./components/GraphApp/GraphApp.js";

import { HEADER_HEIGHT } from "./consts/layoutConsts.js";


function App() {
  return (
    <div className="App">
      <MainHeader className="main-header" />

      <div style={{height: HEADER_HEIGHT,}}> </div>

      <GraphApp className="graph-app" />
    </div>
  );
}

export default App;
