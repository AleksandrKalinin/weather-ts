import React from 'react';
import { ForecastItemWrapper, 
        Header, 
        Title, 
        IconWrapper, 
        Description, 
        Subtitle, 
        Text, 
        Image } from './style';
import { Props } from './types';

const ForecastItem:React.FC<Props> = (props, IconComponent: IconComponent) => {
  let icon = props.item.icon();
  return (
    <ForecastItemWrapper>
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