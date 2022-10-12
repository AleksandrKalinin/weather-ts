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
  const tempIconComponent = () => {
    return (
      <p>fff
      </p>
    );
  }; 

  let IconUrl: React.Component<any, any> | null = null;
  const {value1, value2, value3} = useContext(Context);
  const [isModalOpen, setModalState] = value2;
  const [modalData, setModalData] = value3;
  if(typeof item.icon !== 'undefined') {
    IconUrl = item.icon;
  }
  const openModal = () => {
    setModalState(true);
    setModalData(item);
  }

  console.log(IconUrl);

  return (
    <ForecastItemWrapper onClick={() => openModal()}>
      <Header>
        <Title>{item.weekday}, {item.day} </Title>                
      </Header>
      <IconWrapper>
        IconUrl
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