import React, { useContext, useState, useEffect } from 'react';
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
import { ModalDataType } from './types';
import { ChartHeightType } from '../../types';
import { DefaultIcon } from '../Icons/Icons';
import WeatherChart from '../WeatherChart';

type PropsType = {
  modalData: ModalDataType | null
}

const Modal = (props: PropsType, { height }: ChartHeightType) => {
  const [modalData, setModalData] = useState<ModalDataType | null>(props.modalData);
  const [IconUrl, setIcon] = useState<React.ReactNode>(DefaultIcon)
  const { value2 } = useContext(Context);
  const [isModalOpen, setModalState] = value2;

  const closeModal = () => {
    document.body.style.overflow = 'unset';    
    setModalState(false);
  }   

  useEffect(() => {
    if(props !== null && props.modalData ) {
      setIcon(modalData!.icon);
    }
  },[props.modalData]);

  return (
    <ModalWrapper>
      <WeatherWrapper>
        <IconImageWrapper>
          <IconImage src={Icon} onClick={() => closeModal()} />
        </IconImageWrapper>
        <TopRow>
          <TopRowItem>
            <TopRowTemp>{Math.round(Number(modalData!.temp))}°
              <TopRowImage>
                {IconUrl}
              </TopRowImage>
             </TopRowTemp>
            <TopRowDate>{modalData!.weekday} : {modalData!.formattedDate!.toLocaleDateString()}</TopRowDate>
          </TopRowItem>
          <TopRowItem>
            <TopRowLocation>{modalData!.city}, {modalData!.country}</TopRowLocation>
          </TopRowItem>
        </TopRow>          
        <WeatherRow>
          <WeatherItem>
            <WeatherItemHeader>{Math.round(Number(modalData!.max))}°C / {Math.round(Number(modalData!.min))}°C </WeatherItemHeader>
            <WeatherItemText>High / Low</WeatherItemText>
          </WeatherItem>
          <WeatherItem>
            <WeatherItemHeader>{Math.round(Number(modalData!.feelsLike))}°C </WeatherItemHeader>
            <WeatherItemText>Feels like</WeatherItemText>
          </WeatherItem>
          <WeatherItem>
            <WeatherItemHeader>{modalData!.currentName}</WeatherItemHeader>
            <WeatherItemText>Current condition</WeatherItemText>
          </WeatherItem>            
        </WeatherRow>
        <WeatherRow>
          <WeatherItem>
            <WeatherItemHeader>{modalData!.pressure} hpa</WeatherItemHeader>
            <WeatherItemText>Pressure</WeatherItemText>
          </WeatherItem>
          <WeatherItem>
            <WeatherItemHeader>{modalData!.humidity}</WeatherItemHeader>
            <WeatherItemText>Humidity</WeatherItemText>
          </WeatherItem>
          <WeatherItem>
            <WeatherItemHeader>{modalData!.wind} m/s</WeatherItemHeader>
            <WeatherItemText>Wind</WeatherItemText>
          </WeatherItem>
        </WeatherRow>
        <WeatherChart height={220}/>
      </WeatherWrapper>      
    </ModalWrapper>
  );
}

export default Modal;