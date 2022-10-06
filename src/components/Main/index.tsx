//@ts-nocheck

import React, { useState, useEffect, useContext, Fragment } from 'react';
import axios from 'axios';
import { Context } from '../Context';
import { GlobalStyle, 
          RootContainer, 
          RootWrapper, 
          RootImageWrapper, 
          RootImage, 
          FetchingWrapper, 
          WeatherWrapper, 
          WeatherItem, 
          WeatherItemHeader, 
          WeatherItemText, 
          WeatherRow, 
          TopRow, 
          TopRowItem, 
          TopRowTemp, 
          TopRowDate, 
          TopRowLocation, 
          ForecastWrapper, 
          TopRowImage, 
          WeatherItemImage   } from './style';
import { Weather, Forecast, ForecastData, NewObj } from './types';
import ForecastItem from '../ForecastItem';
import SearchBar from '../SearchBar';

type Dispatch<A> = (value: A) => void;

type ContextValue = {
  context: any,
  setContext: (active: boolean) => void;
}

const App:React.FC = () => {
  const [context, setContext] = useState<any>();
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

  useEffect(() => {
    if(typeof context !== 'undefined') {
      setWeather(context);
      //let data = fetchData();
      setVisible(true);
      setFetching(false);
      console.log(context);
    }
  },[context])

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

  return (
    <Context.Provider value={[context, setContext]}>
      <RootContainer>
        <GlobalStyle />
        <Fragment>
          <RootImageWrapper>
            <RootImage src={currentBg}/>
          </RootImageWrapper>
          <RootWrapper>
            <SearchBar />
           {isVisible ?
            <Fragment>        
              <WeatherWrapper>
                <TopRow>
                  <TopRowItem>
                    <TopRowTemp>{Math.round(Number(weather?.main?.temp))}° <TopRowImage src={iconUrl} /></TopRowTemp>
                    <TopRowDate>Today: {new Date().toLocaleDateString()}</TopRowDate>
                  </TopRowItem>
                  <TopRowItem>
                    <TopRowLocation>{weather?.name}, {weather?.sys?.country}</TopRowLocation>
                  </TopRowItem>
                </TopRow>          
                <WeatherRow>
                  <WeatherItem>
                    <WeatherItemHeader>{Math.round(Number(weather?.main?.temp_min))}°C / {Math.round(Number(weather?.main?.temp_max))}°C </WeatherItemHeader>
                    <WeatherItemText>High / Low</WeatherItemText>
                  </WeatherItem>
                  <WeatherItem>
                    <WeatherItemHeader>{Math.round(Number(weather?.main?.feels_like))}°C </WeatherItemHeader>
                    <WeatherItemText>Feels like</WeatherItemText>
                  </WeatherItem>
                  <WeatherItem>
                    <WeatherItemHeader>{timestrSunrise}</WeatherItemHeader>
                    <WeatherItemText>Sunrise</WeatherItemText>
                  </WeatherItem>
                  <WeatherItem>
                    <WeatherItemHeader>{timestrSunset}</WeatherItemHeader>
                    <WeatherItemText>Sunset</WeatherItemText>
                  </WeatherItem>              
                </WeatherRow>
                <WeatherRow>
                  <WeatherItem>
                    <WeatherItemHeader>{weather?.weather[0]?.main} <WeatherItemImage src={iconUrl} /></WeatherItemHeader>
                    <WeatherItemText>Current condition</WeatherItemText>
                  </WeatherItem>            
                  <WeatherItem>
                    <WeatherItemHeader>{weather?.main?.pressure} hpa</WeatherItemHeader>
                    <WeatherItemText>Pressure</WeatherItemText>
                  </WeatherItem>
                  <WeatherItem>
                    <WeatherItemHeader>{weather?.main?.humidity}</WeatherItemHeader>
                    <WeatherItemText>Humidity</WeatherItemText>
                  </WeatherItem>
                  <WeatherItem>
                    <WeatherItemHeader>{weather?.wind?.speed} m/s</WeatherItemHeader>
                    <WeatherItemText>Wind</WeatherItemText>
                  </WeatherItem>
                </WeatherRow>
              </WeatherWrapper>
              <ForecastWrapper>
                {forecastData?.map((item,index) => 
                  <ForecastItem key = {index} item = {item} />
                )}
              </ForecastWrapper>
           </Fragment> : 
              null
          }
           { isFetching ?
              <FetchingWrapper>
                  Fetching...
              </FetchingWrapper>
              : null}
           { isFailed ?
              <FetchingWrapper>
                  Sorry, the request failed. Try one more time
              </FetchingWrapper>
              : null}               
          </RootWrapper>
        </Fragment> 
      </RootContainer>
    </Context.Provider>
  );
}

export default App;
