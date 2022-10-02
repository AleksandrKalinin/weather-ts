import React, { useState, useEffect, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import './App.css';
import ForecastItem from './ForecastItem';
import ForecastCurrent from './ForecastCurrent';
import SearchBar from './SearchBar';

type Data = {
  base: string,
  clouds: object,
  cod: number,
  coord: object,
  dt: number,
  id: number,
  main: object,
  name: string,
  rain: object,
  sys: object,
  timezone: number,
  visibility: number,
  weather: object[],
  wind: object
}

const App:React.FC = () => {

  const [data, setData] = useState<any>({});

  const [coords, setCoords] = useState<number[]>([])

  useEffect(() => {
    const API_KEY = 'a5821f4600801be4a4ebefc0a0a643ba';
    const API_link = `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${API_KEY}`;
    fetch(API_link)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [coords]) 

  useEffect(() => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          console.log(pos.coords);
          setCoords([pos.coords.latitude, pos.coords.longitude])
        }) 
      } 
  },[])  

  const getForecast = () => {

  }

  const getCity = () => {

  }

  const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
    }

    body {
      margin: 0;
      padding: 0;
    }
  `;

  return (
    <div className="App">
      <GlobalStyle />
      <div className="main">
        <div className="main-background">
          <img className="main-background__image" src="./background/pexels-lachlan-ross-6510395.jpg" />
        </div>
        {data ?
          <>
            <div className="main-weather">
              <SearchBar />
              <div>City: {data.name}</div>
              <div className="main-weather__item weather-items">
                <p className="weather-items__param weather-item"><span className="weather-item__name">Wind:</span>12</p>
                <p className="weather-items__param weather-item"><span className="weather-item__name">Pressure:</span>22.3</p>
                <p className="weather-items__param weather-item"><span className="weather-item__name">Humidity:</span>54</p>
              </div>
            </div>
            <div className="main-forecast">
              <div className="forecast-wrapper">
                <ForecastCurrent />
                <div className="forecast-items">
                  <ForecastItem />
                  <ForecastItem />  
                  <ForecastItem />  
                  <ForecastItem />  
                  <ForecastItem />                                            
                </div>
              </div>
            </div>            
          </>
        : null}
      </div>
      <button onClick = {() => console.log(data)}>Console Data</button>
      <button onClick= {() => getForecast()}>get forecast</button>
      <button onClick= {() => getCity()}>Get city</button>
      <button onClick= {() => console.log(data)}>Get city</button>
    </div>
  );
}

export default App;
