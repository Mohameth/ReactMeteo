import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forecast from './components/Forecast/forecast';
import Conditions from './components/Conditions/Conditions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Meteo application for biggest cities in construction
        </h1>
      </header>

      <main>
        <div id="section_1" class="box">
          <h4> Meteo for Tokyo </h4>
          <Forecast city='tokyo'/>
        </div>
        <div id="section_2" class="box">
          <h4> Meteo for Delhi </h4>
          <Forecast city='delhi'/>
        </div>
        <div id="section_3" class="box">
          <h4> Meteo for Shanghai </h4>
          <Forecast city='shanghai'/>
        </div>
      </main>

      <footer>
        Copyright 2020
      </footer>

    </div>
  );
}

export default App;
