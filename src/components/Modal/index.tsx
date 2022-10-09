import React, { useContext } from 'react';
import { Context } from '../Context';
import {  ModalWrapper,
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
          TopRowImage,
          IconImageWrapper,
          IconImage } from './style';

import Icon from './assets/close.png';

const Modal:React.FC<Props> = (props) => {
  //const weather = props.weather;
  const iconUrl = props.iconUrl;
  const timestrSunrise = props.timestrSunrise;
  const timestrSunset = props.timestrSunset;
  const { value, value2 } = React.useContext(Context);
  const [weather, setWeather] = value;
  const [isModalOpen, setModalState] = value2;

  const closeModal = () => {
    document.body.style.overflow = 'unset';    
    setModalState(false);
  }

  return (
    <ModalWrapper>
      <WeatherWrapper>
        <IconImageWrapper>
          <IconImage src={Icon} onClick={() => closeModal()} />
        </IconImageWrapper>
        <TopRow>
          <TopRowItem>
            <TopRowTemp>{Math.round(Number(weather?.main?.temp))}°
              <TopRowImage>
                {iconUrl}
              </TopRowImage>
             </TopRowTemp>
            <TopRowDate>{new Date().toLocaleDateString()}</TopRowDate>
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
    </ModalWrapper>
  );
}

export default Modal;