import React from 'react';
import styled from 'styled-components';


const ForecastItemWrapper = styled.div`
  width: 285px;
  height: 300px;
  background: rgb(46, 46, 70);
  border: 1px solid #fff;
  color: #fff;
  opacity: 0.8;
  padding: 0 10px;
`

const Header = styled.div`
  padding-bottom: 0;
  margin-bottom: 0;
`

const Title = styled.h2`
  font-size: 18px;
`
const IconWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`
const Description = styled.div`
  padding-top: 0px;
  padding-bottom: 50px;
`

const Subtitle = styled.h4`
  font-weight: 400 ;
  font-size: 21px ;
  margin-bottom: 14px;
`

const Text = styled.p`
  font-size: 15px;
`

const ForecastItem:React.FC = () => {
  return (
    <ForecastItemWrapper>
      <Header>
        <Title>{item.weekday}, {item.day} </Title>                
      </Header>
      <IconWrapper>
        <Image src={item.icon}/>
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