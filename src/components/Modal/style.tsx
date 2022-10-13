import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(51,51,51,0.8);
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WeatherWrapper = styled.div`
  color: #fff;
  width: calc(100% - 100px);
  height: auto;
  min-height: 600px;
  max-height: auto;
  max-width: 1000px;
  padding: 0;
  background: #1860BE;
  padding: 50px;
  position: relative;
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
  margin: 8px 0;
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

export const TopRowItem = styled.div``

export const TopRowTemp = styled.h1`
  margin: 0;
  font-size: 55px;
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
  font-size: 40px;
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

export const TopRowImage = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
`

export const IconImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  position: absolute;
  top: 15px;
  right: 15px;
  @media only screen and (max-width : 768px) {
    width: 30px;
    height: 30px;
  }    
`

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: .1s;
  &:hover {
    transform: scale(1.04);
  }
`