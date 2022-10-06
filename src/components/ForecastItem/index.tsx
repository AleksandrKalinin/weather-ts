import React, {useEffect} from 'react';
import styled from 'styled-components';
import { ForecastItemWrapper, 
        Header, 
        Title, 
        IconWrapper, 
        Description, 
        Subtitle, 
        Text, 
        Image } from './style';


type Props = {
  item: {
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
}

const ForecastItem:React.FC<Props> = (props) => {

  return (
    <ForecastItemWrapper>
      <Header>
        <Title>{props.item.weekday}, {props.item.day} </Title>                
      </Header>
      <IconWrapper>
        <Image src={props.item.icon}/>
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