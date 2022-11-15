import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif ; 
  }

  * {
    box-sizing: border-box;
  }
`;

export const RootContainer = styled.div`
  position: relative;
  height: auto;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  @media only screen and (max-width : 1200px) {
    padding: 0;
  } 
`

export const RootWrapper = styled.div`
  background: rgb(24,96,190);
  background: -moz-linear-gradient(90deg, rgba(24,96,190,0.8) 0%, rgba(37,149,234,0.8) 100%);
  background: -webkit-linear-gradient(90deg, rgba(24,96,190,0.8) 0%, rgba(37,149,234,0.8) 100%);
  background: linear-gradient(90deg, rgba(24,96,190,0.8) 0%, rgba(37,149,234,0.8) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1860be",endColorstr="#2595ea",GradientType=1);
  height: auto;
  min-height: 100vh;
  width: 100%;
  padding: 50px;
  z-index: 999;
  position: relative;
  @media only screen and (max-width : 576px) {
    padding: 50px 20px;
  }   
`

export const RootImageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media only screen and (max-width : 1400px) {
    height: 100%;
  }
`

export const RootImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media only screen and (max-width : 1400px) {
    width: 100%;
    height: 100%;
    object-fit: cover;    
  }
`

export const FetchingWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: calc(100vh - 136px);
  margin: 0 ;
  font-size: 20px;
  margin: 35px auto;
  color: #fff;
  width: calc(100% - 100px);
  max-width: 1500px; 
`

export const WeatherWrapper = styled.div`
  margin: 35px auto;
  color: #fff;
  width: calc(100% - 100px);
  max-width: 1500px;
  padding: 0 ;
  @media only screen and (max-width : 768px) {
    width: 100%;
  }  
`

export const WeatherItem = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 24px;
  @media only screen and (max-width : 576px) {
    display: -webkit-box ;
    display: -ms-flexbox ;
    display: flex ;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: calc(100%);
    align-items: center; 
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      background: #555555;
    }
    &:hover h4, &:hover p {
      transform: scale(1.04);
    }    
  }  
`

export const WeatherItemHeader = styled.h4`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 23px;
  font-weight: 400;
  margin-bottom: 12px;
  transition: .2s all;
  @media only screen and (max-width : 768px) {
    margin: 0;
    font-size: 21px;
  }
  @media only screen and (max-width : 576px) {
    width: 130px;
  }               
`

export const WeatherItemText = styled.p`
  font-size: 16px;
  margin: 8px 0;
  display: flex;
  align-items: center;
  height: 50px;
  transition: .2s all;
  @media only screen and (max-width : 1200px) {
    width: 100%;
  }
  @media only screen and (max-width : 768px) {
    margin: 8px 0;
    font-size: 14px;
  } 
  @media only screen and (max-width : 576px) {
    font-size: 16px;
    font-weight: 700;
  }   
`

export const WeatherRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100%);
  margin: 0 auto;
  max-width: 1500px;
  @media only screen and (max-width : 1200px) {
    width: 100%;
  }

  @media only screen and (max-width : 1200px) {
    flex-wrap: wrap;
  }

`

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 40px 0;
  @media only screen and (max-width : 1200px) {
    width: 100%;
  }
`

export const TopRowItem = styled.div`
`

export const TopRowTemp = styled.h1`
  margin: 0;
  font-size: 70px;
  font-weight: 400;
  display: flex;
  @media only screen and (max-width : 768px) {
    font-size: 24px;
    line-height: 40px;
  }    
`

export const TopRowDate = styled.h3``

export const TopRowLocation = styled.h2`
  margin: 0;
  font-size: 56px;
  line-height: 90px;
  font-weight: 400;
  @media only screen and (max-width : 768px) {
    font-size: 24px;
    line-height: 40px;
  }
  @media only screen and (max-width : 576px) {
    text-align: right;
  }      
`

export const ForecastWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0;
  @media only screen and (max-width : 1400px) {
    width: calc(100% - 100px);
  }
  @media only screen and (max-width : 1200px) {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;  
    width: calc(100% - 200px);
  }    
  @media only screen and (max-width : 992px) {
    width: calc(100% - 40px);    
  }
  @media only screen and (max-width : 768px) {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;   
  }            
`

export const TopRowImage = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
`

export const WeatherItemImage = styled.img`
  line-height: 32px;
  height: 32px;
  margin-left: 3px;
  @media only screen and (max-width : 576px) {
    height: 22px ;
  }
`

export const WeatherItemIcon = styled.span`
  margin-top: -5px;
  height: 40px;
  width: 40px;
`