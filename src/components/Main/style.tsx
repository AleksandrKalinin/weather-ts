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
    padding: 50px 0;
  }   
`

export const RootWrapper = styled.div`
  background: rgba(15,12,41,0.7);
  background: -webkit-gradient(linear, left top, right top, from(rgba(15,12,41,0.7)), color-stop(rgba(48,43,99,0.7)), to(rgba(36,36,42,0.7)));
  background: -o-linear-gradient(left, rgba(15,12,41,0.7), rgba(48,43,99,0.7), rgba(36,36,42,0.7));
  background: linear-gradient(to right, rgba(15,12,41,0.7), rgba(48,43,99,0.7), rgba(36,36,42,0.7));
  height: auto;
  min-height: 100vh;
  width: 100%;
  padding: 50px;
  z-index: 999;
`

export const RootImageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
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
  width: auto;
  height: 100%;
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
    width: calc(100% - 60px);
    align-items: center;    
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
  @media only screen and (max-width : 768px) {
    margin: 0 8px;
    font-size: 21px;
  }             
`

export const WeatherItemText = styled.p`
  font-size: 16px;
  @media only screen and (max-width : 1200px) {
    width: 100%;
  }
  @media only screen and (max-width : 768px) {
    margin: 8px 0;
    font-size: 14px;
  } 
  @media only screen and (max-width : 576px) {
    font-size: 14px;
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
  margin: 0 auto;
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

export const TopRowImage = styled.img`
  width: 60px;
  height: auto;
`

export const WeatherItemImage = styled.img`
  line-height: 32px;
  height: 32px;
  margin-left: 3px;
  @media only screen and (max-width : 576px) {
    height: 22px ;
  }
`