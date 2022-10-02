import React from 'react';
import styled from 'styled-components';

const ForecastCurrentWrapper = styled.div`
  display: flex;
  width: 200px;
  color: #fff;
  margin-right: 50px;
  align-items: center;
`
const Title = styled.h6`
  margin: 0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: #222A35;
  padding: 3px 5px;
  border-radius: 2px;
  text-align: center;
`
const Temperature = styled.div`
  margin: 0;
  font-size: 48px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px; 
`
const ImageWrapper = styled.div`
  margin-right: 30px;
`
const Image = styled.img`
  width: 80px;
  height: 80px;
`

const ForecastCurrent:React.FC = () => {
  return (
    <ForecastCurrentWrapper>
      <ImageWrapper>
        <Image src="./icons8-partly-cloudy-day-48.png" />
      </ImageWrapper>
      <div className="forecast-current__description">
        <Title>Today</Title>
        <Temperature>12C</Temperature>
      </div> 
    </ForecastCurrentWrapper>
  );
}

export default ForecastCurrent;