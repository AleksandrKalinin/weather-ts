import styled from 'styled-components';

export const ForecastItemWrapper = styled.div`
  width: 285px;
  height: 300px;
  background: #1860BE;
  border: 1px solid #fff;
  color: #fff;
  opacity: 0.8;
  padding: 0 10px;
  cursor: pointer;
  transition: .2s;
  &:hover {
    transform: translate(0, -20px);
     filter: brightness(1.2);
  }
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

export const Header = styled.div`
  padding-bottom: 0;
  margin-bottom: 0;
`

export const Title = styled.h2`
  font-size: 18px;
`
export const IconWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin: 0 auto;
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
export const Description = styled.div`
  padding-top: 0px;
  padding-bottom: 50px;
`

export const Subtitle = styled.h4`
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

export const Text = styled.p`
  font-size: 15px;
  @media only screen and (max-width : 992px) {
    font-size: 14px;
  }   
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  @media only screen and (max-width : 992px) {
    height: 100%;
    width: auto;
    object-fit: cover;
  }
`
