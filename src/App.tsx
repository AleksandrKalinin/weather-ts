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
      <>
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
      
    {/*
      <Fragment>
        <div id="root-image">
          <img src={this.state.currentBackground} />
        </div>
        <div id="root-wrapper">
          <div className="input-wrapper">
            <input value={this.state.search} placeholder="search for city" onKeyPress={this.handleKeyPress} className="main-input" onChange={this.updateSearch} ></input> 
            <button onClick={this.fetchInputData} primary >Search</button>
          </div>
         {this.state.isVisible ?
          <Fragment>        
            <div className="weather-wrapper">
              <div columns={2} className="top-row" >
                <div className="column-header">
                  <h1>{this.state.weather.main.temp}° </h1>
                </div>
                <div className="column-header">
                  <h2>{this.state.weather.name}, {this.state.weather.sys.country}</h2>
                </div>
              </div>          
              <div columns={4} className="weather-row">
                <div className="weather-column" >
                  <h4 className="weather-header">{this.state.weather.main.temp_min}° / {this.state.weather.main.temp_max}° </h4>
                  <p className="weather-descr">High / Low</p>
                </div>
                <div className="weather-column">
                  <h4 className="weather-header">{this.state.weather.main.temp}° </h4>
                  <p className="weather-descr">Feels like</p>
                </div>
                <div className="weather-column">
                  <h4 className="weather-header">{this.state.timestrSunrise}</h4>
                  <p className="weather-descr">Sunrise</p>
                </div>
                <div className="weather-column">
                  <h4 className="weather-header">{this.state.timestrSunset}</h4>
                  <p className="weather-descr">Sunset</p>
                </div>              
              </div>
              <div columns={4} className="weather-row">
                <div className="weather-column">
                  <h4 className="weather-header">{this.state.weather.weather[0].main} <img src={this.state.iconUrl}/></h4>
                  <p className="weather-descr">Current condition</p>
                </div>            
                <div className="weather-column">
                  <h4 className="weather-header">{this.state.weather.main.pressure} hpa</h4>
                  <p className="weather-descr">Pressure</p>
                </div>
                <div className="weather-column">
                  <h4 className="weather-header">{this.state.weather.main.humidity}</h4>
                  <p className="weather-descr">Humidity</p>
                </div>
                <div className="weather-column">
                  <h4 className="weather-header">{this.state.weather.wind.speed} m/s</h4>
                  <p className="weather-descr">Wind</p>
                </div>
              </div>
              <div columns={1}>
                <div>
                  <p className="weather-descr">Today: {new Date().toLocaleDateString()}</p>
                </div>
              </div>            
            </div>
            <div itemsPerRow={5} className="forecast-wrapper">
              {this.state.forecast.map((item,index) =>
                <div key={index}>
                  <div className="header-wrapper">
                    <h2>{item.weekday}, {item.day} </h2>                
                  </div>
                  <div className="icon-wrapper">
                    <img src={item.icon} />
                  </div>
                  <div className="icon-description">
                      <h4>{item.max} / {item.min}</h4>
                      <p>{item.currentName} ({item.currentDescription})</p>
                      <p>Wind speed: {item.wind} m/s</p>
                  </div>
                </div>
              )}
            </div>
         </Fragment> : 
            null
        }
         { this.state.isFetching ?
            <div divided className="weather-wrapper fetching-wrapper">
                Fetching...
            </div>
            : null}
         { this.state.isFailed ?
            <div divided className="weather-wrapper fetching-wrapper">
                Sorry, the request failed. Try one more time
            </div>
            : null}               
        </div>
      </Fragment> 
    */}
    </>
  );
}

export default App;
