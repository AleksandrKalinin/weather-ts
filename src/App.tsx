import React, { useState, useEffect, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import ForecastItem from './ForecastItem';
import SearchBar from './SearchBar';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif ; 
  }

  * {
    box-sizing: border-box;
  }
`;

const RootContainer = styled.div`
  position: relative;
  height: auto;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  @media only screen and (max-width : 1200px) {
    padding: 50px 0;
  }   
`

const RootWrapper = styled.div`
  background: rgba(15,12,41,0.7);
  background: -webkit-gradient(linear, left top, right top, from(rgba(15,12,41,0.7)), color-stop(rgba(48,43,99,0.7)), to(rgba(36,36,42,0.7)));
  background: -o-linear-gradient(left, rgba(15,12,41,0.7), rgba(48,43,99,0.7), rgba(36,36,42,0.7));
  background: linear-gradient(to right, rgba(15,12,41,0.7), rgba(48,43,99,0.7), rgba(36,36,42,0.7));
  height: auto;
  min-height: 100vh;
  width: 100%;
  padding: 50px;
  z-index: 999;
`

const RootImageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media only screen and (max-width : 1400px) {
    height: 100%;
  }
`

const RootImage = styled.img`
  width: auto;
  height: 100%;
  @media only screen and (max-width : 1400px) {
    width: 100%;
    height: 100%;
    object-fit: cover;    
  }
`

const FetchingWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: calc(100vh - 136px);
  margin: 0 ;
  font-size: 20px;
  margin: 35px auto;
  color: #fff;
  width: calc(100% - 100px);
  max-width: 1500px; 
`

const WeatherWrapper = styled.div`
  margin: 35px auto;
  color: #fff;
  width: calc(100% - 100px);
  max-width: 1500px;
  padding: 0 ;
`

const WeatherItem = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 24px;
  @media only screen and (max-width : 576px) {
    display: -webkit-box ;
    display: -ms-flexbox ;
    display: flex ;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: calc(100% - 60px);
    align-items: center;    
  }  
`

const WeatherItemHeader = styled.h4`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 23px;
  font-weight: 400;
  margin-bottom: 12px;
  @media only screen and (max-width : 768px) {
    margin: 0 8px;
    font-size: 21px;
  }             
`

const WeatherItemText = styled.p`
  font-size: 16px;
  @media only screen and (max-width : 1200px) {
    width: 100%;
  }
  @media only screen and (max-width : 768px) {
    margin: 8px 0;
    font-size: 14px;
  } 
  @media only screen and (max-width : 576px) {
    font-size: 14px;
    font-weight: 700;
  }   
`

const WeatherRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100%);
  margin: 0 auto;
  max-width: 1500px;
  @media only screen and (max-width : 1200px) {
    width: 100%;
  }

  @media only screen and (max-width : 1200px) {
    flex-wrap: wrap;
  }

`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media only screen and (max-width : 1200px) {
    width: 100%;
  }  
`

const TopRowItem = styled.div`
`

const TopRowTemp = styled.h1`
  margin: 0;
  font-size: 70px;
  font-weight: 400;
  @media only screen and (max-width : 768px) {
    font-size: 24px;
    line-height: 40px;
  }    
`

const TopRowDate = styled.h3``

const TopRowLocation = styled.h2`
  margin: 0;
  font-size: 56px;
  line-height: 90px;
  font-weight: 400;
  @media only screen and (max-width : 768px) {
    font-size: 24px;
    line-height: 40px;
  }
  @media only screen and (max-width : 576px) {
    text-align: right;
  }      
`

const ForecastWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0;
  @media only screen and (max-width : 1400px) {
    width: calc(100% - 100px);
  }
  @media only screen and (max-width : 992px) {
    width: calc(100% - 40px);    
  }
  @media only screen and (max-width : 768px) {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;   
  }            
`

const TopRowImage = styled.img`
  width: 60px;
  height: auto;
`

const WeatherItemImage = styled.img`
  line-height: 32px;
  height: 32px;
  margin-left: 3px;
  @media only screen and (max-width : 576px) {
    height: 22px ;
  }
`

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

  const handleKeyPress = (e: any) => {
    if(e.charCode === 13) {
      fetchInputData();
      setSearch('')
    }
  }

  return (
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
  );
}

export default App;
