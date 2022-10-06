import React, {useEffect} from 'react';
import styled from 'styled-components';

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

const ForecastItemWrapper = styled.div`
  width: 285px;
  height: 300px;
  background: rgb(46, 46, 70);
  border: 1px solid #fff;
  color: #fff;
  opacity: 0.8;
  padding: 0 10px;
  @media only screen and (max-width : 1400px) {
    width: 18%;
    max-width: 18%;
  }
  @media only screen and (max-width : 992px) {
    transform: scale(0.9);
  }
  @media only screen and (max-width : 768px) {
    width: 285px;
    max-width: 285px;    
  }      
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
  @media only screen and (max-width : 992px) {
    width: 50px;
    height: 50px;
    overflow: hidden;
    margin: 0 auto;
  }
  @media only screen and (max-width : 768px) {
    width: 100px;
    height: 100px;
  }    
`
const Description = styled.div`
  padding-top: 0px;
  padding-bottom: 50px;
`

const Subtitle = styled.h4`
  font-weight: 400 ;
  font-size: 21px ;
  margin-bottom: 14px;
  @media only screen and (max-width : 992px) {
    font-size: 14px;
  }   
  @media only screen and (max-width : 576px) {
    margin: 0 8px;
    font-size: 16px;
  }    
`

const Text = styled.p`
  font-size: 15px;
  @media only screen and (max-width : 992px) {
    font-size: 14px;
  }   
`

const Image = styled.img`
  width: 80px;
  height: 80px;
  @media only screen and (max-width : 992px) {
    height: 100%;
    width: auto;
    object-fit: cover;
  }   
`

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