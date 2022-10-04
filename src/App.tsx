import React, { useState, useEffect, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
//import ForecastItem from './ForecastItem';
import ForecastCurrent from './ForecastCurrent';
//import SearchBar from './SearchBar';

type Weather = {
  base: string,
  clouds: object,
  cod: number,
  coord: object,
  dt: number,
  id: number,
  main: { [key: string]: any },
  name: string,
  rain: object,
  sys: {
    country: 'string',
    sunrise: number,
    sunset: number
  },
  timezone: number,
  visibility: number,
  weather: { [key: string]: any }[],
  wind: { [key: string]: any }
}

type Forecast = {
  city: object,
  cnt: number,
  code: string,
  list: { [key:string]: any }[],
  message: number 
}

type ForecastData = {
  formattedTime?: string,
  weekday?: string,
  day?: number,
  temp?: number,
  max?: number,
  min?: number,
  currentName?: string,
  currentDescription?: string,
  icon?: string,
  wind?: number  
}

type NewObj = {
  formattedTime?: string,
  weekday?: string,
  day?: number,
  temp?: number,
  max?: number,
  min?: number,
  currentName?: string,
  currentDescription?: string,
  icon?: string,
  wind?: number
}

const App:React.FC = () => {

  const [forecast, setForecast] = useState<Forecast>();
  const [forecastData, setForecastData] = useState<ForecastData[]>();
  const [coords, setCoords] = useState<number[]>([]);

  const [isFetching, setFetching] = useState<boolean>(true);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [isFailed, setFailed] = useState<boolean>(false);
  const [iconUrl, setIconUrl] = useState<string>('');
  const [weather, setWeather] = useState<Weather>();
  const [timestrSunrise, setSunrise] = useState<string>();
  const [timestrSunset, setSunset] = useState<string>();
  const [currentBg, setCurrentBg] = useState<string>('sunny.jpg');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if(true) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let coords = []
        setCoords([pos.coords.latitude, pos.coords.longitude]);
        coords.push(pos.coords.latitude);
        coords.push(pos.coords.longitude);
        const API_KEY = 'a5821f4600801be4a4ebefc0a0a643ba';
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0]}&lon=${coords[1]}&appid=${API_KEY}&units=metric`;
        const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${API_KEY}&units=metric`;
        axios.all([axios.get(url), axios.get(url2)])
             .then(axios.spread((first, second) => { 
                const forecast = first.data;
                const weather = second.data;
                setForecast(forecast);
                setWeather(weather);
             }))
            .catch((error) => { 
              setFailed(true); 
              setFetching(false);
              setVisible(false)
            });
        })
       
      } else {
          alert("Geolocation is not supported by this browser.");
        }
      
  },[])  

  useEffect(() => {
    if(typeof forecast !== 'undefined' &&  typeof weather !== 'undefined') {
      let data = fetchData();
      setVisible(true);
      setFetching(false);
    }
  },[forecast, weather])

  const defaultWeather = () => {

  }

  const getForecast = () => {

  }

  const getCity = () => {

  }

  const consoleData = () => {
    
  }

  const fetchData = () => {
      setFailed(false);
      let iconCode = weather?.weather[0]?.icon;
      let iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";      
      let sunrise = weather?.sys?.sunrise;
      let sunset = weather?.sys?.sunset;
      let dateSunrise = new Date(sunrise! * 1000);
      let timestrSunrise = dateSunrise.toLocaleTimeString();
      let dateSunset = new Date(sunset! * 1000);
      let timestrSunset = dateSunset.toLocaleTimeString();
      let currentForecast = forecast!.list.slice();
      let newForecast = [];
      let newObj:NewObj = {};
      currentForecast.map((item,index) =>{
        let date = new Date(item.dt * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        let week = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = date.getDate();
        let weekday = week[date.getDay()];
        let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);          
        item.dt = formattedTime;
        item.weekday = weekday;
        item.day = day;
      }) 
      for (let i = 0; i < currentForecast.length; i+=8) {
        let iconCode = currentForecast[i].weather[0].icon;
        let iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";  
        newObj["formattedTime"] = currentForecast[i].dt;
        newObj["weekday"] = currentForecast[i].weekday;
        newObj["day"] = currentForecast[i].day;
        newObj["temp"] = currentForecast[i].main.temp;
        newObj["max"] = currentForecast[i].main.temp_max;
        newObj["min"] = currentForecast[i].main.temp_min;
        newObj["currentName"] = currentForecast[i].weather[0].main;
        newObj["currentDescription"] = currentForecast[i].weather[0].description;
        newObj["icon"] = iconUrl;
        newObj["wind"] = currentForecast[i].wind.speed;
        newForecast.push(newObj);
        newObj = {};
      }
      let condition = weather?.weather[0]?.main;
      let element = document.getElementById('root-wrapper')
      if (condition === "Clouds") {
        setCurrentBg('cloudy.jpg');
      }
      else if (condition === "Rain" || condition === "Drizzle") {
        setCurrentBg('rainy.jpg');
      }
      else if(condition === "Snow") {
        setCurrentBg('snowy.jpg');
      }
      else if (condition === "Mist") {
        setCurrentBg('misty.jpg');
      }      
      else{
        setCurrentBg('sunny.jpg');
      }
      setForecastData(newForecast);
      setSunset(timestrSunset);
      setSunrise(timestrSunrise);
      setIconUrl(iconUrl);
      return ({
        timestrSunrise: timestrSunrise,
        timestrSunset: timestrSunset,
        iconCode: iconCode,
        iconUrl: iconUrl,
        forecast: forecast,
        newForecast: newForecast
      });
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

  const fetchInputData = () => {
    const API_KEY = 'a5821f4600801be4a4ebefc0a0a643ba';
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${API_KEY}&units=metric`;
    const url2 = `http://api.openweathermap.org/data/2.5/weather?q=${search}&limit=1&appid=${API_KEY}&units=metric`; 
      axios.all([axios.get(url), axios.get(url2)])
        .then(axios.spread((first, second) => { 
          const forecast = first.data;
          const weather = second.data;
          setForecast(forecast);
          setWeather(weather);
        }))
        .catch((error) => { 
          setFailed(true); 
          setFetching(false);
          setVisible(false)
        });
  }

  const handleKeyPress = (e: any) => {
    if(e.charCode === 13) {
      fetchInputData();
      setSearch('')
    }
  }

  return (
      <>
      <Fragment>
        <div id="root-image">
          <img src={currentBg}/>
        </div>
        <div id="root-wrapper">
          <div className="input-wrapper">
            <input value={search} placeholder="search for city" onKeyPress={(e) => handleKeyPress(e)} className="main-input" onChange={(e) => setSearch(e.target.value)} ></input> 
            <button onClick={() => fetchInputData()}>Search</button>
          </div>
         {isVisible ?
          <Fragment>        
            <div className="weather-wrapper">
              <div  className="top-row" >
                <div className="column-header">
                  <h1>{Math.round(Number(weather?.main?.temp))}° <img className="top-icon" src={iconUrl} /></h1>
                  <h3>Today: {new Date().toLocaleDateString()}</h3>
                </div>
                <div className="column-header">
                  <h2>{weather?.name}, {weather?.sys?.country}</h2>
                </div>
              </div>          
              <div  className="weather-row">
                <div className="weather-column" >
                  <h4 className="weather-header">{Math.round(Number(weather?.main?.temp_min))}°C / {Math.round(Number(weather?.main?.temp_max))}°C </h4>
                  <p className="weather-descr">High / Low</p>
                </div>
                <div className="weather-column">
                  <h4 className="weather-header">{Math.round(Number(weather?.main?.feels_like))}°C </h4>
                  <p className="weather-descr">Feels like</p>
                </div>
                <div className="weather-column">
                  <h4 className="weather-header">{timestrSunrise}</h4>
                  <p className="weather-descr">Sunrise</p>
                </div>
                <div className="weather-column">
                  <h4 className="weather-header">{timestrSunset}</h4>
                  <p className="weather-descr">Sunset</p>
                </div>              
              </div>
              <div className="weather-row">
                <div className="weather-column">
                  <h4 className="weather-header">{weather?.weather[0]?.main} <img src={iconUrl} /></h4>
                  <p className="weather-descr">Current condition</p>
                </div>            
                <div className="weather-column">
                  <h4 className="weather-header">{weather?.main?.pressure} hpa</h4>
                  <p className="weather-descr">Pressure</p>
                </div>
                <div className="weather-column">
                  <h4 className="weather-header">{weather?.main?.humidity}</h4>
                  <p className="weather-descr">Humidity</p>
                </div>
                <div className="weather-column">
                  <h4 className="weather-header">{weather?.wind?.speed} m/s</h4>
                  <p className="weather-descr">Wind</p>
                </div>
              </div>
            </div>
            <div className="forecast-wrapper">
              {forecastData?.map((item,index) =>
                <div key={index} className="forecast-item">
                  <div className="header-wrapper">
                    <h2>{item.weekday}, {item.day} </h2>                
                  </div>
                  <div className="icon-wrapper">
                    <img src={item.icon}/>
                  </div>
                  <div className="icon-description">
                      <h4>{Math.round(Number(item.max))}°C / {Math.round(Number(item.min))}°C</h4>
                      <p>{item.currentName} ({item.currentDescription})</p>
                      <p>Wind speed: {item.wind} m/s</p>
                  </div>
                </div>
              )}
            </div>
         </Fragment> : 
            null
        }
         { isFetching ?
            <div className="weather-wrapper fetching-wrapper">
                Fetching...
            </div>
            : null}
         { isFailed ?
            <div className="weather-wrapper fetching-wrapper">
                Sorry, the request failed. Try one more time
            </div>
            : null}               
        </div>
      </Fragment> 
    </>
  );
}

export default App;
