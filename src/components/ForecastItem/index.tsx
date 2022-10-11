import React, { useContext, useState } from 'react';
import { ForecastItemWrapper, 
        Header, 
        Title, 
        IconWrapper, 
        Description, 
        Subtitle, 
        Text } from './style';
import { Props, SingleItemType } from './types';
import { Context } from '../Context';

const ForecastItem = ( { item } : SingleItemType ) => {
  let icon : any;
  const {value1, value2, value3} = useContext(Context);
  const [isModalOpen, setModalState] = value2;
  const [modalData, setModalData] = value3;
  if(typeof item.icon !== 'undefined') {
    icon = item.icon();
  }
  const openModal = () => {
    setModalState(true);
    setModalData(item);
  }

  return (
    <ForecastItemWrapper onClick={() => openModal()}>
      <Header>
        <Title>{item.weekday}, {item.day} </Title>                
      </Header>
      <IconWrapper>
        {icon}
      </IconWrapper>
      <Description>
          <Subtitle>{Math.round(Number(item.max))}°C / {Math.round(Number(item.min))}°C</Subtitle>
          <Text>{item.currentName} ({item.currentDescription})</Text>
          <Text>Wind speed: {item.wind} m/s</Text>
      </Description>
    </ForecastItemWrapper>
  );
}

export default ForecastItem;