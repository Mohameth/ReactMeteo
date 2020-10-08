import React, { useState, Component } from 'react';

const Forecast = (props) => {
   let [responseObj, setResponseObj] = useState({});
   let [city, setCity] = useState('');
   let [unit, setUnit] = useState('metric');
   const uriEncodedCity = encodeURIComponent(props.city);
   //const Row = props => { div id = {props.id}};

   function getForecast() {

     fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
           "method": "GET",
           "headers": {
             "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
             "x-rapidapi-key": "2a118367d8msh950c9da75a5f6ddp15ae73jsna42ebab30cd3"
           }
     }).then(response => response.json())
     .then(response => {
       setResponseObj(response)
     }).catch(err => {
       console.log(err);
     });
   }

   return (
     <div>
      <h2>Find Current Weather Conditions</h2>
      <div>
          {getForecast} //TODO: Call the function without recursivness
          {JSON.stringify(responseObj)}
      </div>
      <button onClick={getForecast}>Get Forecast</button>
     </div>
   )

}

export default Forecast;
