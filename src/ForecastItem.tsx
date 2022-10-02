import React from 'react';
import styled from 'styled-components';

const ForecastItemWrapper = styled.div`
  width: 150px;
  color: #fff;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`
const Title = styled.h6`
  margin: 0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: #222A35;
  padding: 3px 8px;
  border-radius: 2px;
`
const Temperature = styled.div`
  margin: 0;
  font-size: 28px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
`
const ForecastItem:React.FC = () => {
  return (
    <ForecastItemWrapper>
      <Title>Sun</Title>
      <div className="forecast-current__image">
        <img src="./icons8-partly-cloudy-day-48.png" className="forecast-current__icon"/>
      </div> 
      <Temperature>12C</Temperature>
    </ForecastItemWrapper>
  );
}

export default ForecastItem;