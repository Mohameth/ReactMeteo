import React, { useState } from 'react';

const Forecast = () => {
   let [responseObj, setResponseObj] = useState({});
   function getForecast() {

     fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
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
          {JSON.stringify(responseObj)}
      </div>
      <button onClick={getForecast}>Get Forecast</button>
     </div>
   )
}

export default Forecast;
