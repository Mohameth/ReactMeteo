import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Meteo application for biggest cities in construction
        </h1>
      </header>

      <main>
        {/*<div id="section_1">
          <Forecast>
        </div>
        <div id="section_2">
          <Forecast>
        </div>
        <div id="section_3">
          <Forecast>
        </div>*/}

        <Forecast />
      </main>

      <footer>
        Copyright 2020
      </footer>

    </div>
  );
}

export default App;
