import React, { useState, useEffect, Fragment, useCallback } from 'react';
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
          TopRowImage  } from './style';
import { Weather, Forecast, ForecastData, NewObj } from './types';
import { Fog, Hail, Rain, Thunderstorm, Clear, Snow, Clouds, Haze, Mist, Dust, Tornado, Smoke, Drizzle } from '../Icons/Icons';
import ForecastItem from '../ForecastItem';
import SearchBar from '../SearchBar';
import Modal from '../Modal';
import FogBG from './assets/fog.jpg';
import CloudsBG from './assets/clouds.jpg';
import ClearBG from './assets/clear.jpg';
import RainBG from './assets/rain.jpg';
import SnowBG from './assets/snow.jpg';
import HailBG from './assets/hail.jpg';

const App:React.FC = () => {
  let tempIconComponent = () => {
    return(<p>Empty</p>);
  };  
  const [forecast, setForecast] = useState<Forecast>();
  const [weather, setWeather] = useState<Weather>();
  const [isFetching, setFetching] = useState<boolean>(true);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [isFailed, setFailed] = useState<boolean>(false);
  const [isModalOpen, setModalState] = useState<boolean>(false);
  const [forecastData, setForecastData] = useState<ForecastData[]>();
  const [modalData, setModalData] = useState<any>();
  const [iconUrl, setIconUrl] = useState<any>(tempIconComponent);
  const [timestrSunrise, setSunrise] = useState<string>();
  const [timestrSunset, setSunset] = useState<string>();
  const [currentBg, setCurrentBg] = useState<any>(ClearBG);

  useEffect(() => {
    if(navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 10000
      };      
      navigator.geolocation.watchPosition((pos) => {
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;
        const API_KEY = 'a5821f4600801be4a4ebefc0a0a643ba';
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
        const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
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
        }, () => {alert("Unexpexted error occured! Try to refresh your page")}, options)
       
      } else {
          alert("Geolocation is not supported by this browser.");
        }      
  },[])  

  const fetchData = useCallback(() => {
      setFailed(false);
      if(typeof forecast !== 'undefined' &&  typeof weather !== 'undefined') {
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
        let advancedData:any = {};
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
          let forecastCondition = currentForecast[i].weather[0].main;
          let svgIcon;
          if(forecastCondition === 'Rain') {
            svgIcon = Rain;            
          } else if(forecastCondition === 'Drizzle') {            
            svgIcon = Drizzle;
          } else if(forecastCondition === 'Clouds') {
            svgIcon = Clouds;
          } else if(forecastCondition === 'Hail') {            
            svgIcon = Hail;
          } else if(forecastCondition === 'Snow') {
            svgIcon = Snow;
          } else if(forecastCondition === 'Fog') {
            svgIcon = Fog;                           
          } else if(forecastCondition === 'Thunderstorm') {
            svgIcon = Thunderstorm;
          } else if(forecastCondition === 'Haze') {            
            svgIcon = Haze;
          } else if(forecastCondition === 'Mist') {
            svgIcon = Mist;
          } else if(forecastCondition === 'Tornado') {
            svgIcon = Tornado;
          } else if(forecastCondition === 'Smoke') {
            svgIcon = Smoke;
          } else if(forecastCondition === 'Dust') {
            svgIcon = Dust;                          
          } else {
            svgIcon = Clear;
          }
          newObj["city"] = forecast.city.name;
          newObj["country"] = forecast.city.country;
          newObj["timestrSunset"] = timestrSunset;
          newObj["timestrSunrise"] = timestrSunrise;
          newObj["formattedTime"] = currentForecast[i].dt;
          newObj["weekday"] = currentForecast[i].weekday;
          newObj["day"] = currentForecast[i].day;
          newObj["temp"] = currentForecast[i].main.temp;
          newObj["max"] = currentForecast[i].main.temp_max;
          newObj["min"] = currentForecast[i].main.temp_min;
          newObj["currentName"] = currentForecast[i].weather[0].main;
          newObj["currentDescription"] = currentForecast[i].weather[0].description;
          newObj["icon"] = svgIcon;
          newObj["wind"] = currentForecast[i].wind.speed;
          newObj["advancedData"] = advancedData;
          newForecast.push(newObj);
          newObj = {};
        }
        let condition = weather?.weather[0]?.main;
        if(condition === 'Rain') {
          iconUrl = Rain;
          setCurrentBg(RainBG);
        } else if(condition === 'Drizzle') {            
          iconUrl = Drizzle;
          setCurrentBg(RainBG);
        } else if(condition === 'Clouds') {
          iconUrl = Clouds;
          setCurrentBg(CloudsBG);
        } else if(condition === 'Hail') {            
          iconUrl = Hail;
          setCurrentBg(HailBG);
        } else if(condition === 'Snow') {
          iconUrl = Snow;
          setCurrentBg(SnowBG);
        } else if(condition === 'Fog') {
          iconUrl = Fog;      
          setCurrentBg(SnowBG);                     
        } else if(condition === 'Thunderstorm') {
          iconUrl = Thunderstorm;
          setCurrentBg(ThunderBG); 
        } else if(condition === 'Haze') {            
          iconUrl = Haze;
          setCurrentBg(FogBG); 
        } else if(condition === 'Mist') {
          iconUrl = Mist;
          setCurrentBg(FogBG); 
        } else if(condition === 'Tornado') {
          iconUrl = Tornado;
          setCurrentBg(ClearBG); 
        } else if(condition === 'Smoke') {
          iconUrl = Smoke;
          setCurrentBg(FogBG); 
        } else if(condition === 'Dust') {
          iconUrl = Dust; 
          setCurrentBg(ClearBG);                          
        } else {
          iconUrl = Clear;
          setCurrentBg(ClearBG);
        }
        setForecastData(newForecast);
        setSunset(timestrSunset);
        setSunrise(timestrSunrise);
        setIconUrl(iconUrl);
        
      } 
    }, [weather, forecast])

  useEffect(() => {
    if(typeof forecast !== 'undefined' &&  typeof weather !== 'undefined') {
      fetchData();
      setVisible(true);
      setFetching(false);
    }
  },[forecast, weather, fetchData])

  const openModal = () => {
    console.log(weather);
    console.log(forecast);
    console.log(forecastData);
    document.body.style.overflow = 'hidden';    
    setModalState(!isModalOpen);
  }

  return (
    <Context.Provider value = {{ value: [weather, setWeather, forecast, setForecast, isVisible, setVisible, isFetching, setFetching, isFailed, setFailed ], 
                                 value2: [isModalOpen, setModalState],
                                 value3: [modalData, setModalData]
                              }}>
      <RootContainer>
        <GlobalStyle />
        <Fragment>
          <RootImageWrapper>
            <RootImage src={currentBg}/>
          </RootImageWrapper>
          <RootWrapper>
             {isModalOpen ?
                <Modal weather={weather} iconUrl={iconUrl} timestrSunset={timestrSunset} timestrSunrise={timestrSunrise} />
              : null}
             <SearchBar />
             {isVisible ?
              <Fragment>        
                <WeatherWrapper>
                  <TopRow>
                    <TopRowItem>
                      <TopRowTemp>{Math.round(Number(weather?.main?.temp))}°
                        <TopRowImage>
                          {iconUrl}
                        </TopRowImage>
                       </TopRowTemp>
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
                      <WeatherItemHeader>{weather?.weather[0]?.main}</WeatherItemHeader>
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
