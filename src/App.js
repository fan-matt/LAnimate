import React from 'react';
import logo from './logo.svg';
import "./reset.scss";
import './App.scss';

import MainHeader from "./components/MainHeader/MainHeader.js";
import GraphApp from "./components/GraphApp/GraphApp.js";


function App() {
  return (
    <div className="App">
      <MainHeader className="main-header" />

      <div className="header-body-spacer"> </div>

      <GraphApp className="graph-app" />
    </div>
  );
}

export default App;
