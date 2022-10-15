import React, { useContext, useState, useEffect } from 'react';
import { ForecastItemWrapper, 
        Header, 
        Title, 
        IconWrapper, 
        Description, 
        Subtitle, 
        Text } from './style';
import { SingleItemType } from './types';
import { Context } from '../Context';
import { DefaultIcon } from '../Icons/Icons';

type IndexType = {
  id: number
}

type ForecastProps = {
  item: SingleItemType
}

const ForecastItem = ( { item }: SingleItemType ) => {
  const [IconUrl, setIcon] = useState<React.ReactNode>(DefaultIcon);
  const {value2, value3, value4} = useContext(Context);
  const [isModalOpen, setModalState] = value2;
  const [modalData, setModalData] = value3;
  const [chartData, setChartData] = value4;

  useEffect(() => {
    if(typeof item.icon !== 'undefined') {
      setIcon(item.icon);
    }
  },[])

  const openModal = (index: any) => {
    //document.body.style.overflow = 'hidden';  
    setModalState(true);
    setModalData(item);
  }

  return (
    <ForecastItemWrapper onClick={(index) => openModal(index)}>
      <Header>
        <Title>{item.weekday}, {item.day} </Title>                
      </Header>
      <IconWrapper>
        {IconUrl}
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