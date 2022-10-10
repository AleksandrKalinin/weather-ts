import React, { useContext } from 'react';
import { ForecastItemWrapper, 
        Header, 
        Title, 
        IconWrapper, 
        Description, 
        Subtitle, 
        Text } from './style';
import { Props } from './types';
import type { SingleItemType } from '../../types/index';
import { Context } from '../Context';

const ForecastItem = (props: number) => {
  console.log(SingleItemType);
  let icon = props.item.icon();
  const { value2, value3 } = useContext(Context);
  const [isModalOpen, setModalState] = value2;
  const [modalData, setModalData] = value3;
  
  const openModal = () => {
    setModalState(true);
    setModalData(props.item);
  }

  return (
    <ForecastItemWrapper onClick={() => openModal()}>
      <Header>
        <Title>{props.item.weekday}, {props.item.day} </Title>                
      </Header>
      <IconWrapper>
        {icon}
      </IconWrapper>
      <Description>
          <Subtitle>{Math.round(Number(props.item.max))}°C / {Math.round(Number(props.item.min))}°C</Subtitle>
          <Text>{props.item.currentName} ({props.item.currentDescription})</Text>
          <Text>Wind speed: {props.item.wind} m/s</Text>
      </Description>
    </ForecastItemWrapper>
  );
}

export default ForecastItem;